import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ValidationError, validateOrReject } from 'class-validator';
import { dtoMap } from 'src/dto';
import { PrismaService } from 'src/services/prisma.service';
import { BulkResponse } from 'src/types/bulk-response.types';

@Injectable()
export class SharedService {
  constructor(private prismaService: PrismaService) {}

  async processBulk<ModelType>(
    records: ModelType[],
    modelName: keyof PrismaService & string,
    response: string,
    custId: number,
  ): Promise<BulkResponse<ModelType>> {
    try {
      const processedRecords: ModelType[] = [];
      console.log('llegue//');
      
      for (const record of records) {
        const model = (this.prismaService as any)[modelName];
  
        if (!model) {
          throw new Error(`Model ${modelName} not found on PrismaService`);
        }
  
        const { id, isNew, isEdited, isDeleted, ...data } = record as any;
        let result = null;
  
        const dtoModule = await this.getDtoModule(modelName);
  
        const transformedData = this.transformRelationFields(data, modelName);
        
        // Asignar `CUST_ID` si el modelo lo requiere
        this.assignCustIdIfApplicable(modelName, transformedData, custId);
  
        delete transformedData.CUST_ID;
        if (isNew) {
          await this.validateDto(dtoModule.CreateUserDto, transformedData);
          if (custId) {
            transformedData.cust = { connect: { id: custId } };
          }
          console.log('111',transformedData);
          
          result = await model.create({ data: transformedData });
        }
         else if (isEdited) {
           console.log('transformedData',transformedData);
           await this.validateDto(dtoModule.UpdateUserDto, transformedData);
           console.log('error?');
          
          result = await model.update({
            where: { id: id },
            data: transformedData,
          });
        } else if (isDeleted) {
          await this.validateDto(dtoModule.DeleteUserDto, { id });
          result = await model.delete({ where: { id: id } });
        }
  
        processedRecords.push(result);
      }
  
      return {
        status: 'success',
        message: `${response} procesados correctamente`,
        data: processedRecords,
      };
    } catch (error) {
      console.error('Error processing bulk operation:', error);
  
      // Manejo específico de errores de validación
      if (Array.isArray(error) && error[0] instanceof ValidationError) {
        const validationErrors = error.map((err) => {
          return {
            field: err.property,
            constraints: Object.values(err.constraints || {}).join(', '),
          };
        });
  
        return {
          status: 'error',
          message: 'Errores de validación en los datos enviados.',
          errors: validationErrors,
        };
      }
  
      // Error general
      return {
        status: 'error',
        message: `Error al procesar ${response}`,
        errors: [],
      };
    }
  }

  private assignCustIdIfApplicable(modelName: string, data: any, custId: number) {
    // Verifica si el modelo tiene un campo `CUST_ID` y lo asigna
    const modelDefinition = this.prismaService.getModelDefinition(modelName);
    const hasCustId = modelDefinition.fields.some((field) => field.name === 'CUST_ID');
    
    if (hasCustId) {
      data.CUST_ID = custId; // Asignación de `CUST_ID`
    }
  }
  


  private filterModifiedFields(originalData: any, modifiedData: any) {
    const filteredData = {};

    for (const key in modifiedData) {
      if (modifiedData[key] !== originalData[key]) {
        filteredData[key] = modifiedData[key];
      }
    }

    return filteredData;
  }

  private transformRelationFields(data: any, modelName: string) {
    const transformedData = { ...data };
    const modelDefinition = this.prismaService.getModelDefinition(modelName);
  
    for (const key of Object.keys(data)) {
      // Convertir "renterId" a "renter: { connect: { id: renterId } }"
      if (key.endsWith("Id") && key !== 'CUST_ID') { // Ignorar CUST_ID
        const relationKey = key.replace(/Id$/, "");
        const isRelation = modelDefinition.fields.some(
          (field) => field.name === relationKey && field.kind === "object"
        );
  
        if (isRelation) {
          transformedData[relationKey] = { connect: { id: data[key] } };
          delete transformedData[key];
        }
      }
    }
  
    return transformedData;
  }

  private isRelationField(modelName: string, field: string): boolean {
    const model = this.prismaService.getModelDefinition(modelName);

    const modelField = model.fields.find((f) => f.name === field);

    return modelField && modelField.kind === 'object';
  }

  private async getDtoModule(modelName: string) {
    const dtoLoader = dtoMap[modelName];
    if (dtoLoader) {
      return await dtoLoader();
    }
    throw new Error(`No DTOs found for model: ${modelName}`);
  }

  private async validateDto(DtoClass: any, data: any) {
    const instance = plainToInstance(DtoClass, data);
    await validateOrReject(instance);
  }
}
