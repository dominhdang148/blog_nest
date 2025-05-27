import { HttpStatus } from '@nestjs/common';
import { Pagination } from './pagination.model';

export interface ApiResponse<Type> {
  message: string;
  status: HttpStatus;
  data: Type | null;
  pagination: Pagination | null;
}
