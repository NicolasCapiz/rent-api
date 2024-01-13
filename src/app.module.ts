import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './service/prisma.service';
import { LocationController } from './controller/location.controller';
import { UserController } from './controller/user.controller';
import { PaymentController } from './controller/payment.controller';
import { InvoiceController } from './controller/invoice.controller';
import { PaymentScheduleController } from './controller/paymentSchedule.controller';
import { KeyController } from './controller/key.controller';
import { GoogleStrategy } from './strategy/google.strategy';

@Module({
  imports: [],
  controllers: [
    AppController,
    LocationController,
    UserController,
    PaymentController,
    InvoiceController,
    PaymentScheduleController,
    KeyController,
  ],
  providers: [AppService, PrismaService, GoogleStrategy],
})
export class AppModule {}
