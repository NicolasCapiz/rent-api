"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatDateInterceptor = void 0;
// src/interceptors/format-date.interceptor.ts
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const date_fns_1 = require("date-fns");
let FormatDateInterceptor = class FormatDateInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => this.formatDates(data)));
    }
    formatDates(data) {
        if (Array.isArray(data)) {
            return data.map((item) => this.formatDates(item));
        }
        else if (typeof data === 'object' && data !== null) {
            const formattedData = Object.assign({}, data);
            for (const key in formattedData) {
                if (formattedData[key] instanceof Date) {
                    formattedData[key] = (0, date_fns_1.format)(formattedData[key], 'yyyy-MM-dd');
                }
                else if (typeof formattedData[key] === 'object') {
                    formattedData[key] = this.formatDates(formattedData[key]);
                }
            }
            return formattedData;
        }
        return data;
    }
};
exports.FormatDateInterceptor = FormatDateInterceptor;
exports.FormatDateInterceptor = FormatDateInterceptor = __decorate([
    (0, common_1.Injectable)()
], FormatDateInterceptor);
//# sourceMappingURL=format-date.interceptor.js.map