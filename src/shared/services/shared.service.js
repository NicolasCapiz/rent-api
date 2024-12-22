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
exports.SharedService = void 0;
// src/shared/services/shared.service.ts
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
const date_fns_1 = require("date-fns");
let SharedService = class SharedService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    processBulk(records, modelName, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const processedRecords = [];
                for (const record of records) {
                    const model = this.prismaService[modelName];
                    if (!model) {
                        throw new Error(`Model ${modelName} does not exist on PrismaService`);
                    }
                    const _a = record, { id, isNew, isEdited, isDeleted } = _a, data = __rest(_a, ["id", "isNew", "isEdited", "isDeleted"]);
                    let result = null;
                    if (data.date) {
                        data.date = (0, date_fns_1.formatISO)(new Date(data.date));
                    }
                    if (isNew) {
                        result = yield model.create({ data });
                    }
                    else if (isEdited) {
                        result = yield model.update({
                            where: { id: id },
                            data,
                        });
                    }
                    else if (isDeleted) {
                        result = yield model.delete({ where: { id: id } });
                    }
                    processedRecords.push(result);
                }
                console.log('processedRecords', processedRecords);
                return {
                    status: 'success',
                    message: `${response} procesados correctamente`,
                    data: processedRecords,
                };
            }
            catch (error) {
                console.error('Error processing bulk operation:', error);
                return {
                    status: 'error',
                    message: `Error al procesar ${response}`,
                    data: [],
                };
            }
        });
    }
};
exports.SharedService = SharedService;
exports.SharedService = SharedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SharedService);
//# sourceMappingURL=shared.service.js.map