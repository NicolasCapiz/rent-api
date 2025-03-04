import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient, Prisma } from '../../prisma/generated/index';

import { scopeMap } from '../common/scopeMap';
import { DashboardFiltersDto } from 'src/dto/dashboard.filters.dto';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
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

  // En tu PrismaService
  // Dentro de src/services/prisma.service.ts
  async buildQuery(
    model: keyof PrismaClient,
    filters: DashboardFiltersDto,
    searchableFields: string[],
    custId?: number
  ): Promise<any[]> {
    const where: any = {};

    // Si hay término de búsqueda, construir la condición OR
    if (filters.search && filters.search.trim() !== '') {
      where.OR = searchableFields.map((field) => {
        // Lista de campos numéricos en los que se realizará comparación por igualdad
        const numericFields = ["remainingAmount", "totalPaid", "totalRent", "month", "year"];

        if (field.includes('.')) {
          // Si el campo es anidado (por ejemplo: "location.name"), asume que es texto
          const parts = field.split('.');
          let nested: any = {};
          let current = nested;
          for (let i = 0; i < parts.length - 1; i++) {
            current[parts[i]] = {};
            current = current[parts[i]];
          }
          current[parts[parts.length - 1]] = { contains: filters.search };
          return nested;
        } else {
          if (numericFields.includes(field)) {
            // Intentar convertir el término de búsqueda a número
            const num = Number(filters.search);
            return isNaN(num) ? {} : { [field]: num };
          } else {
            return { [field]: { contains: filters.search } };
          }
        }
      });
    }

    // Siempre filtrar por CUST_ID
    if (custId) {
      where.CUST_ID = custId;
    }

    // Agregar otros filtros opcionales: año, mes y local (si son válidos)
    if (filters.year && !isNaN(Number(filters.year))) {
      where.year = Number(filters.year);
    }
    if (filters.month && !isNaN(Number(filters.month))) {
      where.month = Number(filters.month);
    }
    if (filters.local && filters.local !== "0") {
      where.locationId = parseInt(filters.local, 10);
    }

    // Construir el objeto orderBy si se especifica una clave de ordenamiento
    const orderBy: any = {};
    if (filters.sortKey) {
      orderBy[filters.sortKey] = filters.sortOrder || 'asc';
    }

    // Obtener el modelo de Prisma y ejecutar la consulta
    const prismaModel = this[model as keyof PrismaClient] as any;
    return prismaModel.findMany({
      where,
      orderBy,
    });
  }








}
