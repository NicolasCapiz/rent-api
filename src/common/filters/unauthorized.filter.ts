import { ExceptionFilter, Catch, UnauthorizedException, ArgumentsHost } from '@nestjs/common';

@Catch(UnauthorizedException)
export class UnauthorizedFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(401).json({
      statusCode: 401,
      message: 'TokenExpired', // Este mensaje será usado para identificar el error en el frontend
    });
  }
}
