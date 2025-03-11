import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // Definimos que el "username" es el "email"
  }

  async validate(email: string, password: string): Promise<{ success: boolean; message: string; user?: any }> {
    try {
      const user = await this.authService.validateUser(email, password);
      if (!user) {
        return { success: false, message: 'Credenciales inválidas' };
      }
      return { success: true, message: 'Usuario válido', user };
    } catch (error: any) {
      // Puedes personalizar el mensaje de error si es necesario.
      return { success: false, message: error.message || 'Error al validar usuario' };
    }
  }

}
