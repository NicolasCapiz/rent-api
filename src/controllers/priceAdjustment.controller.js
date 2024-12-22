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
exports.PriceAdjustmentController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../services/prisma.service");
let PriceAdjustmentController = class PriceAdjustmentController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getPriceAdjustments() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.priceAdjustment.findMany();
        });
    }
    getPriceAdjustment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.priceAdjustment.findUnique({
                where: { id: parseInt(id) },
            });
        });
    }
    createPriceAdjustment(priceAdjustment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.priceAdjustment.create({
                data: priceAdjustment,
            });
        });
    }
    updatePriceAdjustment(id, priceAdjustment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.priceAdjustment.update({
                where: { id: parseInt(id) },
                data: priceAdjustment,
            });
        });
    }
    deletePriceAdjustment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.priceAdjustment.delete({
                where: { id: parseInt(id) },
            });
        });
    }
};
exports.PriceAdjustmentController = PriceAdjustmentController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PriceAdjustmentController.prototype, "getPriceAdjustments", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PriceAdjustmentController.prototype, "getPriceAdjustment", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PriceAdjustmentController.prototype, "createPriceAdjustment", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PriceAdjustmentController.prototype, "updatePriceAdjustment", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PriceAdjustmentController.prototype, "deletePriceAdjustment", null);
exports.PriceAdjustmentController = PriceAdjustmentController = __decorate([
    (0, common_1.Controller)('priceAdjustments'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PriceAdjustmentController);
//# sourceMappingURL=priceAdjustment.controller.js.map