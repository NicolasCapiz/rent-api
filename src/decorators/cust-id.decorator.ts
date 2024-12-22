import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const CustId = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const custId = request.user?.userId; // Usa el campo que el JWT devuelve como `userId`
  console.log('request.user',request.user);
  
  
  if (!custId) {
    throw new UnauthorizedException("Usuario no autenticado. 1");
  }
  return custId;
});
