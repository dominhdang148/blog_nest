import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_category')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    length: 50,
    unique: true,
    nullable: false,
  })
  name: string;

  @Column({
    length: 50,
    unique: true,
    nullable: false,
    name: 'url_slug',
  })
  urlSlug: string;

  @Column({
    length: 500,
  })
  description: string;

  @Column({
    default: false,
    nullable: false,
    name: 'show_on_menu',
  })
  showOnMenu: boolean;
}
