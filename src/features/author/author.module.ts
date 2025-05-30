import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';
import { AuthorController } from './controllers/author.controller';
import { AuthorAdminController } from './controllers/author-admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [AuthorController, AuthorAdminController],
})
export class AuthorModule {}
