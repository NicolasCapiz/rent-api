"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../services/prisma.service");
const shared_service_1 = require("../shared/services/shared.service");
const MODEL = 'paymentMethod';
const RESPONSE = 'paymentMethods';
let PaymentMethodController = class PaymentMethodController {
    constructor(prisma, sharedService) {
        this.prisma = prisma;
        this.sharedService = sharedService;
    }
    getAllPaymentMethods() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.paymentMethod.findMany();
        });
    }
    getPaymentMethodById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.paymentMethod.findUnique({
                where: { id: parseInt(id) },
            });
        });
    }
    createPaymentMethod(paymentMethodData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.paymentMethod.create({
                data: paymentMethodData,
            });
        });
    }
    updatePaymentMethod(id, paymentMethodData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.paymentMethod.update({
                where: { id: parseInt(id) },
                data: paymentMethodData,
            });
        });
    }
    updatePaymentMethods(paymentMethodData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sharedService.processBulk(paymentMethodData, MODEL, RESPONSE);
        });
    }
    deletePaymentMethod(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.paymentMethod.delete({
                where: { id: parseInt(id) },
            });
        });
    }
};
exports.PaymentMethodController = PaymentMethodController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "getAllPaymentMethods", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "getPaymentMethodById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "createPaymentMethod", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "updatePaymentMethod", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "updatePaymentMethods", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "deletePaymentMethod", null);
exports.PaymentMethodController = PaymentMethodController = __decorate([
    (0, common_1.Controller)(RESPONSE),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        shared_service_1.SharedService])
], PaymentMethodController);
//# sourceMappingURL=paymentMethod.controller.js.map