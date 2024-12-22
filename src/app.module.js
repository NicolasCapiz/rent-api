"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("./services/prisma.service");
const create_context_middleware_1 = require("./middleware/create-context.middleware");
const location_controller_1 = require("./controllers/location.controller");
const user_controller_1 = require("./controllers/user.controller");
const auth_controller_1 = require("./controllers/auth.controller");
const payment_controller_1 = require("./controllers/payment.controller");
const paymentMethod_controller_1 = require("./controllers/paymentMethod.controller");
const invoice_controller_1 = require("./controllers/invoice.controller");
const paymentSchedule_controller_1 = require("./controllers/paymentSchedule.controller");
const key_controller_1 = require("./controllers/key.controller");
const shared_service_1 = require("./shared/services/shared.service");
const auth_service_1 = require("./services/auth.service");
const user_service_1 = require("./services/user.service");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const local_strategy_1 = require("./strategy/local.strategy");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(create_context_middleware_1.CreateContextMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot()],
        controllers: [
            // AppController,
            auth_controller_1.AuthController,
            location_controller_1.LocationController,
            user_controller_1.UserController,
            payment_controller_1.PaymentController,
            paymentMethod_controller_1.PaymentMethodController,
            invoice_controller_1.InvoiceController,
            paymentSchedule_controller_1.PaymentScheduleController,
            key_controller_1.KeyController,
        ],
        providers: [
            shared_service_1.SharedService,
            prisma_service_1.PrismaService,
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
            local_strategy_1.LocalStrategy,
            user_service_1.UserService,
        ],
    })
], AppModule);
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
//# sourceMappingURL=app.module.js.map