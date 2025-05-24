import { AuthorEntity } from '../author/author.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from '../category/category.entity';
import { TagEntity } from '../tag/tag.entity';

@Entity('tbl_post')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    length: 500,
  })
  title: string;

  @Column({
    name: 'short_description',
    nullable: false,
    length: 5000,
  })
  shortDescription: string;

  @Column({
    nullable: false,
    length: 5000,
  })
  description: string;

  @Column({
    nullable: false,
    length: 1000,
  })
  meta: string;

  @Column({
    name: 'url_slug',
    nullable: false,
    length: 200,
  })
  urlSlug: string;

  @Column({
    name: 'image_url',
    length: 1000,
  })
  imageUrl: string;

  @Column({
    name: 'view_count',
    nullable: false,
    default: 0,
  })
  viewCount: number;

  @Column({
    nullable: false,
    default: false,
  })
  published: boolean;

  @CreateDateColumn({
    name: 'posted_date',
    type: 'timestamptz',
  })
  postedDate: Date;

  @UpdateDateColumn({
    name: 'modified_date',
    type: 'timestamptz',
  })
  modifiedDate: Date;

  // Relationships

  @ManyToOne(() => AuthorEntity, (author) => author.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'author_id' })
  author: AuthorEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.posts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @ManyToMany(() => TagEntity)
  @JoinTable({
    name: 'tbl_post_tag',
    joinColumn: { name: 'post_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: TagEntity[];
}
