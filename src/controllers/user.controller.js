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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../services/prisma.service");
const shared_service_1 = require("../shared/services/shared.service");
const MODEL = 'user', RESPONSE = 'users';
let UserController = class UserController {
    constructor(prisma, sharedService) {
        this.prisma = prisma;
        this.sharedService = sharedService;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findMany();
        });
    }
    getRenters() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findMany({
                where: {
                    isRenter: true,
                },
            });
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findUnique({
                where: { id: parseInt(id) },
            });
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.create({
                data: user,
            });
        });
    }
    updateRenters(rentersData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sharedService.processBulk(rentersData, MODEL, RESPONSE);
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.update({
                where: { id: parseInt(id) },
                data: user,
            });
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.delete({
                where: { id: parseInt(id) },
            });
        });
    }
    processModel(data_1, model_1) {
        return __awaiter(this, arguments, void 0, function* (data, model, response = model) {
            try {
                const updatedData = [];
                for (const item of data) {
                    const { id, isNew, isEdited, isDeleted } = item, userData = __rest(item, ["id", "isNew", "isEdited", "isDeleted"]);
                    let result;
                    if (isNew) {
                        result = yield this.prisma[model].create({
                            data: userData,
                        });
                    }
                    else if (isEdited) {
                        result = yield this.prisma[model].update({
                            where: { id: id },
                            data: userData,
                        });
                    }
                    else if (isDeleted) {
                        result = yield this.prisma[model].delete({
                            where: { id: id },
                        });
                    }
                    updatedData.push(result);
                }
                return {
                    status: 'ok',
                    message: `${response} procesados correctamente`,
                    data: updatedData,
                };
            }
            catch (error) {
                // Manejo de errores
                return {
                    status: 'error',
                    message: `Error al procesar ${response}`,
                    data: [],
                };
            }
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('/renters'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getRenters", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)('/renters'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateRenters", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)(RESPONSE),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        shared_service_1.SharedService])
], UserController);
//# sourceMappingURL=user.controller.js.map