import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
