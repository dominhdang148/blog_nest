import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthorEntity } from 'src/features/author/author.entity';
import { CategoryEntity } from 'src/features/category/category.entity';
import { PostEntity } from 'src/features/post/post.entity';
import { TagEntity } from 'src/features/tag/tag.entity';

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [AuthorEntity, CategoryEntity, PostEntity, TagEntity],
  synchronize: true,
});
