import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from 'src/common/models/api-response.model';

@Controller('api/author')
@ApiTags('Author Endpoints')
export class AuthorController {
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): ApiResponse<null> {
    return { status: HttpStatus.OK, data: null, message: 'Coming soon', pagination: null };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getDetail(@Param('id') id: string): ApiResponse<null> {
    return { status: HttpStatus.OK, data: null, message: 'Coming soon: ' + id, pagination: null };
  }

  @Get(':slug/post')
  @HttpCode(HttpStatus.OK)
  getPostBySlug(@Param('slug') slug: string): ApiResponse<null> {
    return { status: HttpStatus.OK, data: null, message: 'Coming soon: ' + slug, pagination: null };
  }
}
