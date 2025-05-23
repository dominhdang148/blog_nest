import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseService } from './database.service';
import { CategoryModule } from './features/category/category.module';
import { Category } from './features/category/category.entity';
import { AuthorModule } from './features/author/author.module';
import { Author } from './features/author/author.entity';
import { Post } from './features/post/post.entity';
import { PostModule } from './features/post/post.module';
import { TagModule } from './features/tag/tag.module';
import { Tag } from './features/tag/tag.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [Category, Author, Tag, Post],
        synchronize: true,
      }),
    }),
    CategoryModule,
    AuthorModule,
    PostModule,
    TagModule,
  ],
  providers: [DatabaseService],
})
export class AppModule {}
