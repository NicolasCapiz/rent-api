import { PrismaService } from './prisma.service'; // Importa tu servicio Prisma
import { Injectable } from '@nestjs/common';
import { User } from '../../prisma/generated';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(email: string, password: string, dni: number): Promise<User> {
    return this.prisma.user.create({
      data: {
        email,
        password, // Aplica el hashing de la contraseña aquí, si es necesario.
        dni,      // Ahora se incluye el DNI, que es obligatorio.
      },
    });
  }
  
}
