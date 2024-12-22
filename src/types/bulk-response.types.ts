// src/types/bulk-response.types.ts

export type SuccessResponse<T> = {
  status: 'success';
  message: string;
  data: T[];
};

export type ErrorResponse = {
  status: 'error';
  message: string;
  errors: {
    field: string;
    constraints: string;
  }[];
};

export type BulkResponse<T> = SuccessResponse<T> | ErrorResponse;
