import {
  Controller,
  Request,
  Post,
  Get,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from '../common/guards/local-auth.guard';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { PrismaService } from 'src/services/prisma.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {

    try {
      const { email, password } = req.body;
      const result = await this.authService.login(email, password);
      return result;
    } catch (error) {
      throw new HttpException(
        'Error al iniciar sesión. Por favor verifica tus credenciales.',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  @Post('register')
  async register(@Request() req) {
    try {
      const { email, password, firstName, lastName, dni } = req.body;
      console.log('email, password, dni', email, password, firstName, lastName, dni);

      const result = await this.authService.register(email, password, firstName, lastName, dni);
      return result;
    } catch (error) {
      throw new HttpException(
        'Error al registrar usuario. Por favor verifica los datos ingresados.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @UseGuards(JwtAuthGuard) // Proteger con JWT
  @Get('me')
  async getMe(@Request() req) {

    const user = await this.prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        dni: true,
      },
    });

    return user;
  }


}
