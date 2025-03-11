import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { User } from '../../prisma/generated';
import { NotificationService } from './notification.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly notificationService: NotificationService,
  ) { }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findByEmail(email);
    // Importante: en producción se recomienda usar bcrypt para comparar contraseñas
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new HttpException(
        'El email o contraseña son incorrectas.',
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

  async register(email: string, password: string, firstName: string, lastName: string, dni: number) {
    const existingUser = await this.userService.findByEmail(email);
    console.log('hay email?');

    if (existingUser) {
      throw new HttpException(
        'Este correo electrónico ya está registrado.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.userService.createUser(email, password, firstName, lastName, dni);
    const payload = { email: user.email, sub: user.id };


    const token = this.jwtService.sign(payload);

    try {
      const subject = "🎉 Bienvenido a Rent Management";
      const message = `Hola ${firstName},\n\nTu cuenta ha sido creada exitosamente. Ahora puedes gestionar tus contratos y alquileres de manera eficiente.\n\n¡Bienvenido!`;

      const htmlMessage = `
        <h2>Bienvenido a Rent Management, ${firstName}!</h2>
        <p>Tu cuenta ha sido creada con éxito. Ahora puedes gestionar tus contratos y alquileres de manera eficiente.</p>
        <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
        <br>
        <strong>¡Gracias por unirte!</strong>
      `;

      await this.notificationService.sendEmail(user.email, subject, message, htmlMessage);
    } catch (error) {
      console.error("❌ Error al enviar email de bienvenida:", error);
    }
    return {
      success: true,
      message: 'Usuario registrado exitosamente.',
      access_token: token,
      user,
    };
  }
}
