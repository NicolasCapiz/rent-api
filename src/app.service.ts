import { Injectable } from '@nestjs/common';
import { PrismaService } from './service/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    const findUser = await this.prisma.user.findUnique({
      where: { email: req.user.email },
    });

    console.log('findUser', findUser);

    if (findUser) {
      console.log('update');
      await this.prisma.user.update({
        where: { email: req.user.email },
        data: req.user,
      });
    } else {
      console.log('create');
      await this.prisma.user.create({ data: { ...req.user } });
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
