import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['numero'])
export class Engin extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 5 })
  type!: string;

  @Column({ length: 8 })
  numero!: string;
}
