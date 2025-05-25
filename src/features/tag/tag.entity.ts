import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from '../post/post.entity';

@Entity('tbl_tag')
export class TagEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 50,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    name: 'url_slug',
    nullable: false,
    unique: true,
    length: 50,
  })
  urlSlug: string;

  @Column({
    length: 500,
  })
  description: string;
}
