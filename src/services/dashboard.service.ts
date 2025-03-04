// src/services/dashboard.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { DashboardFiltersDto } from '../dto/dashboard.filters.dto';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Ingresos diarios: Suma de Payment.amount agrupado por día para el mes seleccionado.
   * Se utiliza el modelo Payment.
   */
  async getDailyRevenue(filters: DashboardFiltersDto, custId: number) {
    const year = Number(filters.year);
    const month = Number(filters.month);
    // Buscar pagos en el período (Payment tiene el campo 'date' que usaremos para obtener el día)
    const records = await this.prisma.payment.findMany({
      where: {
        year: year,
        month: month,
        CUST_ID: custId,
        ...(filters.local && filters.local !== "0" && { locationId: parseInt(filters.local, 10) }),
      },
    });
    const dailyMap: { [key: number]: number } = {};
    records.forEach(record => {
      const day = new Date(record.date).getDate();
      dailyMap[day] = (dailyMap[day] || 0) + record.amount;
    });
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const revenue = days.map(day => dailyMap[day] || 0);
    return { days: days.map(String), revenue };
  }

  /**
   * Ingresos mensuales: Suma de rentAmount en RentHistory agrupado por mes para el año seleccionado.
   */
  async getRevenue(filters: DashboardFiltersDto, custId: number) {
    const year = Number(filters.year);
    const revenueGroups = await this.prisma.rentHistory.groupBy({
      by: ['month'],
      where: {
        year: year,
        CUST_ID: custId,
        ...(filters.local && filters.local !== "0" && { locationId: parseInt(filters.local, 10) }),
      },
      _sum: { rentAmount: true },
    });
    // Inicializar arreglo para 12 meses
    const revenueData = Array(12).fill(0);
    revenueGroups.forEach(group => {
      revenueData[group.month - 1] = group._sum.rentAmount || 0;
    });
    const monthNames = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return {
      labels: monthNames,
      datasets: [{
        label: 'Ingresos Mensuales',
        data: revenueData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }],
    };
  }

  /**
   * Ocupación: porcentaje de locales con al menos un contrato activo.
   */
  async getOccupancy(filters: DashboardFiltersDto, custId: number) {
    const locationWhere = {
      CUST_ID: custId,
      ...(filters.local && filters.local !== "0" && { id: parseInt(filters.local, 10) }),
    };
    const total = await this.prisma.location.count({ where: locationWhere });
    const occupied = await this.prisma.location.count({
      where: {
        ...locationWhere,
        contracts: { some: { active: true } },
      },
    });
    const vacant = total - occupied;
    return {
      labels: ['Locales Ocupados', 'Locales Vacíos'],
      datasets: [{
        label: 'Ocupación de Locales',
        data: [occupied, vacant],
        backgroundColor: ['#4CAF50', '#F44336'],
      }],
    };
  }

  /**
   * Estado de Pagos: basado en PaymentRecord.
   * Cuenta cuántos registros tienen totalPaid >= totalRent, > 0, o 0.
   */
  async getPaymentStatus(filters: DashboardFiltersDto, custId: number) {
    const year = Number(filters.year);
    const month = Number(filters.month);
  
    // Validar que year y month sean números válidos
    if (isNaN(year) || isNaN(month)) {
      throw new Error("Los filtros 'year' y 'month' deben ser números válidos.");
    }
  
    const records = await this.prisma.paymentRecord.findMany({
      where: {
        year: year,
        month: month,
        CUST_ID: custId,
        ...(filters.local && filters.local !== "0" && { locationId: parseInt(filters.local, 10) }),
      },
    });
  
    let pagado = 0, pendiente = 0, vencido = 0;
    records.forEach(record => {
      if (record.totalPaid >= record.totalRent) {
        pagado++;
      } else if (record.totalPaid > 0) {
        pendiente++;
      } else {
        vencido++;
      }
    });
  
    return {
      labels: ['Pagado', 'Pendiente', 'Vencido'],
      datasets: [{
        label: 'Estado de Pagos',
        data: [pagado, pendiente, vencido],
        backgroundColor: ['#2196F3', '#FFC107', '#F44336'],
      }],
    };
  }
  
  // Dashboard de Ajustes de Precio: agrupa los ajustes del año dado por mes
  async getPriceAdjustments(filters: DashboardFiltersDto, custId: number) {
    const year = Number(filters.year) || new Date().getFullYear();
    // Definir el rango del año solicitado
    const start = new Date(year, 0, 1);
    const end = new Date(year + 1, 0, 1);
    
    // Obtener todos los ajustes de precio de este cliente en el año (y filtrar por local si se indica)
    const adjustments = await this.prisma.priceAdjustment.findMany({
      where: {
        CUST_ID: custId,
        createdAt: {
          gte: start,
          lt: end,
        },
        ...(filters.local && filters.local !== "0" && {
          locations: {
            some: { id: parseInt(filters.local, 10) },
          },
        }),
      },
    });

    // Inicializar arreglos para contar la cantidad y sumar los montos por mes (0 = enero, 11 = diciembre)
    const counts = Array(12).fill(0);
    const amounts = Array(12).fill(0);

    adjustments.forEach(adj => {
      const month = new Date(adj.createdAt).getMonth();
      counts[month] += 1;
      amounts[month] += adj.amount;
    });

    const monthNames = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    return {
      labels: monthNames,
      datasets: [
        {
          label: "Cantidad de Ajustes",
          data: counts,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Monto Total Ajustado",
          data: amounts,
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
        },
      ],
    };
  }

  /**
   * Distribución de Inquilinos: ejemplo dummy.
   */
  async getRenterDistribution(filters: DashboardFiltersDto, custId: number) {
    const renters = await this.prisma.user.findMany({
      where: { CUST_ID: custId },
      select: { id: true },
    });
    const total = renters.length;
    const empresas = Math.floor(total * 0.4);
    const autonomos = Math.floor(total * 0.4);
    const franquicias = total - empresas - autonomos;
    return {
      labels: ['Empresas', 'Autónomos', 'Franquicias'],
      datasets: [{
        label: 'Distribución de Inquilinos',
        data: [empresas, autonomos, franquicias],
        backgroundColor: ['#673AB7', '#FF5722', '#009688'],
      }],
    };
  }

  /**
   * Comparación de Rentas: Promedio de rentas en los últimos tres años.
   */
  async getRentComparison(filters: DashboardFiltersDto, custId: number) {
    const year = Number(filters.year);
    const years = [year - 2, year - 1, year];
    const results = await Promise.all(years.map(async (yr) => {
      const aggregate = await this.prisma.rentHistory.aggregate({
        _avg: { rentAmount: true },
        where: {
          year: yr,
          CUST_ID: custId,
          ...(filters.local && filters.local !== "0" && { locationId: parseInt(filters.local, 10) }),
        },
      });
      return aggregate._avg.rentAmount || 0;
    }));
    return {
      labels: years.map(String),
      datasets: [{
        label: 'Comparación de Rentas',
        data: results,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      }],
    };
  }

  /**
   * Total de Pagos del Mes: Suma de Payment.amount para el mes seleccionado.
   */
  async getTotalPayments(filters: DashboardFiltersDto, custId: number) {
    const year = Number(filters.year);
    const month = Number(filters.month);
    const records = await this.prisma.payment.findMany({
      where: {
        year: year,
        month: month,
        CUST_ID: custId,
        ...(filters.local && filters.local !== "0" && { locationId: parseInt(filters.local, 10) }),
      },
    });
    const total = records.reduce((acc, rec) => acc + rec.amount, 0);
    return { totalPayments: total };
  }

  /**
   * Distribución de Métodos de Pago: agrupa Payment por paymentMethodId.
   */
  async getPaymentMethodDistribution(filters: DashboardFiltersDto, custId: number) {
    const year = Number(filters.year);
    const month = Number(filters.month);
    const groups = await this.prisma.payment.groupBy({
      by: ['paymentMethodId'],
      where: {
        year: year,
        month: month,
        CUST_ID: custId,
        ...(filters.local && filters.local !== "0" && { locationId: parseInt(filters.local, 10) }),
      },
      _count: { paymentMethodId: true },
    });
    // Supongamos que obtenemos el nombre del método en un paso posterior o se usa el id.
    return {
      labels: groups.map(g => g.paymentMethodId.toString()),
      datasets: [{
        label: 'Métodos de Pago',
        data: groups.map(g => g._count.paymentMethodId),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      }],
    };
  }

  /**
   * Promedio de Renta por Local: Agrupa RentHistory por locationId y calcula el promedio.
   */
  async getAverageRentPerLocation(filters: DashboardFiltersDto, custId: number) {
    const year = Number(filters.year);
    const month = Number(filters.month);
    const groups = await this.prisma.rentHistory.groupBy({
      by: ['locationId'],
      where: {
        year: year,
        month: month,
        CUST_ID: custId,
        ...(filters.local && filters.local !== "0" && { locationId: parseInt(filters.local, 10) }),
      },
      _avg: { rentAmount: true },
    });
    // Obtener nombres de locales
    const results = await Promise.all(groups.map(async group => {
      const loc = await this.prisma.location.findUnique({ where: { id: group.locationId } });
      return {
        locationName: loc?.name || group.locationId.toString(),
        avgRent: group._avg.rentAmount || 0,
      };
    }));
    return {
      labels: results.map(r => r.locationName),
      datasets: [{
        label: 'Renta Promedio',
        data: results.map(r => r.avgRent),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      }],
    };
  }

  /**
   * Obtener locales para el filtro.
   */
  async getLocations(custId: number) {
    return await this.prisma.location.findMany({
      where: { CUST_ID: custId },
      select: { id: true, name: true },
    });
  }
}
