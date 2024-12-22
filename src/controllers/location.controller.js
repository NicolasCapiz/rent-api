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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
// import { PrismaService } from '../prisma.service';
const prisma_service_1 = require("../services/prisma.service");
const shared_service_1 = require("../shared/services/shared.service");
const MODEL = 'location', RESPONSE = 'locations';
let LocationController = class LocationController {
    constructor(prisma, sharedService) {
        this.prisma = prisma;
        this.sharedService = sharedService;
    }
    getAllLocations() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.location.findMany({
                include: { renter: true },
            });
        });
    }
    getLocationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.location.findUnique({
                where: { id: parseInt(id) },
            });
        });
    }
    createLocation(locationData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.location.create({
                data: locationData,
            });
        });
    }
    updateLocation(id, locationData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.location.update({
                where: { id: parseInt(id) },
                data: locationData,
            });
        });
    }
    updateLocations(locationsData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sharedService.processBulk(locationsData, MODEL, RESPONSE);
        });
    }
    deleteLocation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Convertir el ID a tipo Int
            const locationId = parseInt(id);
            try {
                yield this.prisma.location.delete({
                    where: {
                        id: locationId,
                    },
                });
                return { status: 'ok', message: 'Locations deleted successfully' };
            }
            catch (error) { }
        });
    }
    deleteLocations(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('acaaaa ids', ids);
            yield this.prisma.location.deleteMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
            });
        });
    }
};
exports.LocationController = LocationController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getAllLocations", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getLocationById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "createLocation", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "updateLocation", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "updateLocations", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "deleteLocation", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "deleteLocations", null);
exports.LocationController = LocationController = __decorate([
    (0, common_1.Controller)('locations'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        shared_service_1.SharedService])
], LocationController);
//# sourceMappingURL=location.controller.js.map