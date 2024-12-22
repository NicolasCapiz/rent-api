import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient, Prisma } from '../../prisma/generated/index';

import { scopeMap } from '../common/scopeMap';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
    this.$connect();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  getDmmf() {
    return Prisma.dmmf;
  }

  getModelDefinition(modelName: string) {
    const dmmf = this.getDmmf();
    const capitalizedModelName = this.capitalizeModelName(modelName);

    const model = dmmf.datamodel.models.find(
      (m: Prisma.DMMF.Model) => m.name === capitalizedModelName,
    );

    if (!model) {
      throw new Error(`Model ${capitalizedModelName} not found in Prisma schema`);
    }

    return model;
  }

  private capitalizeModelName(modelName: string): string {
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  }

  async buildQuery(
    model: keyof PrismaClient, // Modelo de Prisma
    search: string | undefined, // Término de búsqueda
    sortKey: string | undefined, // Clave para ordenar
    sortOrder: 'asc' | 'desc' = 'asc', // Orden ascendente o descendente
    searchableFields: string[], // Campos para búsqueda
    custId?: number, // Opcional, para filtrar por CUST_ID
  ): Promise<any[]> {
    // Construcción del objeto where
    const where: any = {};
    
    if (search) {
      where.OR = searchableFields.map((field) => ({
        [field]: { contains: search },
      }));
    }
  
    if (custId) {
      where.CUST_ID = custId;
    }
  
    // Construcción del objeto orderBy
    const orderBy: any = {};
    if (sortKey) {
      orderBy[sortKey] = sortOrder;
    }
  
    // Ejecución de la consulta en Prisma
    const prismaModel = this[model as keyof PrismaClient] as any;
    // if (!prismaModel || !prismaModel.findMany) {
    //   throw new Error(`El modelo "${this.model}" no existe o no soporta findMany`);
    // }
  
    return prismaModel.findMany({
      where,
      orderBy,
    });
  }
}
