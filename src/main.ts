import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './services/prisma.service';
import { config } from 'dotenv';

config(); // Cargar las variables de entorno desde el archivo .env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS usando NestJS
  app.enableCors({
    origin: '*', // Puedes especificar el origen permitido, e.g., 'http://localhost:3000'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const prismaService = await app.resolve(PrismaService);
  await prismaService.$connect();

  await app.listen(3307);
}
bootstrap();
