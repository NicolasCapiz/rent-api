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

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
      const { email, password, dni } = req.body;
      const result = await this.authService.register(email, password, dni);
      return result;
    } catch (error) {
      throw new HttpException(
        'Error al registrar usuario. Por favor verifica los datos ingresados.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Nueva ruta para obtener los detalles del usuario autenticado
  @UseGuards(JwtAuthGuard) // Proteger con JWT
  @Get('me')
  getMe(@Request() req) {
    // El token ya ha sido validado y el usuario está en req.user
    return req.user;
  }

}
