import { Controller, Delete, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from 'src/common/models/api-response.model';

@Controller('api/admin/author')
@ApiTags('Author Endpoints')
export class AuthorAdminController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  addNew(): ApiResponse<null> {
    return { status: HttpStatus.CREATED, data: null, message: 'Coming soon', pagination: null };
  }

  @Post(':id/avatar')
  @HttpCode(HttpStatus.OK)
  uploadAvatar(@Param('id') id: string): ApiResponse<null> {
    return {
      status: HttpStatus.OK,
      data: null,
      message: 'Coming soon: ' + id,
      pagination: null,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string): ApiResponse<null> {
    return {
      status: HttpStatus.OK,
      data: null,
      message: 'Coming soon: ' + id,
      pagination: null,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string): void {}
}
