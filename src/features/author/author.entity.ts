import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from '../post/post.entity';

@Entity('tbl_author')
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'full_name',
    nullable: false,
    length: 100,
  })
  fullName: string;

  @Column({
    name: 'url_slug',
    nullable: false,
    length: 100,
  })
  urlSlug: string;

  @Column({
    name: 'image_url',
    length: 500,
  })
  imageUrl: string;

  @CreateDateColumn({
    name: 'joined_date',
    type: 'timestamptz',
  })
  joinedDate: Date;

  @Column({
    length: 150,
  })
  email: string;

  @Column({
    length: 500,
  })
  note: string;

  // Relationships

  @OneToMany(() => PostEntity, (post) => post.author, { cascade: true })
  posts: PostEntity[];
}
