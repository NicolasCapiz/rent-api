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

  async createUser(email: string, password: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        email,
        password, // Aquí deberías aplicar hashing para la contraseña
      },
    });
  }
}
