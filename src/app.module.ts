import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaService } from './services/prisma.service';
import { CreateContextMiddleware } from './middleware/create-context.middleware';
import { APP_FILTER } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { UnauthorizedFilter } from './common/filters/unauthorized.filter';
import { LocationController } from './controllers/location.controller';
import { UserController } from './controllers/user.controller';
import { AuthController } from './controllers/auth.controller';
import { PaymentController } from './controllers/payment.controller';
import { PaymentRecordController } from './controllers/paymentRecord.controller';
import { DashboardController } from './controllers/dashboard.controller';
import { PaymentMethodController } from './controllers/paymentMethod.controller';
import { InvoiceController } from './controllers/invoice.controller';
import { LeaseContractController } from './controllers/leaseContract.controller.ts';
import { PaymentScheduleController } from './controllers/paymentSchedule.controller';
import { KeyController } from './controllers/key.controller';
import { RentHistoryController } from './controllers/rentHistory.controller';
import { SharedService } from './shared/services/shared.service';
import { AuthService } from './services/auth.service';
import { LeaseContractService } from './services/leaseContract.service';
import { PaymentRecordService } from './services/paymentRecord.service';
import { UserService } from './services/user.service';
import { NotificationService } from './services/notification.service';
import { DashboardService } from './services/dashboard.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import * as dotenv from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
import { PriceAdjustmentController } from './controllers/priceAdjustment.controller';

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Accede directamente a la variable de entorno
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [
    AuthController,
    LocationController,
    UserController,
    PaymentController,
    PaymentMethodController,
    InvoiceController,
    LeaseContractController,
    PaymentScheduleController,
    KeyController,
    RentHistoryController,
    PriceAdjustmentController,
    DashboardController,
    PaymentRecordController
  ],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: UnauthorizedFilter, // Aplica el filtro globalmente
    // },
    SharedService,
    PrismaService,
    AuthService,
    LeaseContractService,
    JwtStrategy,
    LocalStrategy,
    UserService,
    DashboardService,
    PaymentRecordService,
    NotificationService
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CreateContextMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL, });
  }
}

// @Module({
//   // imports: [ConfigModule.forRoot()],
//   controllers: [
//     AppController,
//     LocationController,
//     UserController,
//     PaymentController,
//     PaymentMethodController,
//     InvoiceController,
//     PaymentScheduleController,
//     KeyController,
//   ],
//   providers: [AppService, PrismaService, SharedService],
// })
// export class AppModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(CreateContextMiddleware)
//       .forRoutes({ path: '*', method: RequestMethod.ALL });
//   }
// }
