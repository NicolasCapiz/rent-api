// src/interceptors/format-date.interceptor.ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { format } from 'date-fns';

@Injectable()
export class FormatDateInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => this.formatDates(data)));
  }

  private formatDates(data: any): any {
    console.log('1111');
    
    if (Array.isArray(data)) {
      return data.map((item) => this.formatDates(item));
    } else if (typeof data === 'object' && data !== null) {
      const formattedData = { ...data };
      for (const key in formattedData) {
        if (formattedData[key] instanceof Date) {
          console.log('entre nomas', key);
          
          formattedData[key] = format(formattedData[key], 'yyyy-MM-dd');
        } else if (typeof formattedData[key] === 'object') {
          formattedData[key] = this.formatDates(formattedData[key]);
        }
      }
      return formattedData;
    }
    return data;
  }
}
