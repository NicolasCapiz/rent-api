import { PrismaService } from './prisma.service'; // Importa tu servicio Prisma
import { Injectable } from '@nestjs/common';
import { User } from '../../prisma/generated';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async findByEmail(email: string): Promise<User | null> {
    try {
      console.log(`🔍 Buscando usuario con email: ${email}`);

      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        console.warn(`⚠️ Usuario no encontrado con email: ${email}`);
      } else {
        console.log(`✅ Usuario encontrado: ${JSON.stringify(user)}`);
      }

      return user;
    } catch (error) {
      console.error(`❌ Error al buscar usuario con email: ${email}`, error);
      throw new Error('Error interno al buscar el usuario');
    }
  }


  async createUser(email: string, password: string, firstName: string, lastName: string, dni: number): Promise<User> {
    return this.prisma.user.create({
      data: {
        email,
        password, // Aplica el hashing de la contraseña aquí, si es necesario.
        firstName,      // Ahora se incluye el DNI, que es obligatorio.
        lastName,      // Ahora se incluye el DNI, que es obligatorio.
        dni,      // Ahora se incluye el DNI, que es obligatorio.
      },
    });
  }

  // 🔹 Obtener preferencias de notificación del usuario
  async getNotificationSettings(userId: number) {
    console.log('userId', userId);

    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        email: true,
        notifyPriceIncrease: true,
        notifyContractEnded: true,
        notifyBillingSummary: true,
        notifyPaymentReminder: true,
        notifyContractExpiring: true,
      },
    });
  }

  // 🔹 Actualizar preferencias de notificación
  async updateNotificationSettings(userId: number, settings: any) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        notifyPriceIncrease: settings.notifyPriceIncrease,
        notifyContractEnded: settings.notifyContractEnded,
        notifyBillingSummary: settings.notifyBillingSummary,
        notifyPaymentReminder: settings.notifyPaymentReminder,
        notifyContractExpiring: settings.notifyContractExpiring,
      },
    });
  }
}
