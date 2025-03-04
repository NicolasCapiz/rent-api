import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { User } from '../../prisma/generated';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      // Asegúrate de usar bcrypt para las contraseñas
      return user;
    }
    return null;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new HttpException(
        'Credenciales incorrectas, por favor verifica tus datos.',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return {
      message: 'Inicio de sesión exitoso.',
      access_token: token,
      user,
    };
  }

  async register(email: string, password: string, dni: number) {
    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new HttpException(
        'Este correo electrónico ya está registrado.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.userService.createUser(email, password, dni);
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    return {
      message: 'Usuario registrado exitosamente.',
      access_token: token,
      user,
    };
  }
}
