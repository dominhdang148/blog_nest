import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseService } from './database.service';
import { CategoryModule } from './features/category/category.module';
import { AuthorModule } from './features/author/author.module';
import { PostModule } from './features/post/post.module';
import { TagModule } from './features/tag/tag.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),
    CategoryModule,
    AuthorModule,
    PostModule,
    TagModule,
  ],
  providers: [DatabaseService],
})
export class AppModule {}
