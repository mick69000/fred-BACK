import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['numero'])
export class Voie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  numero!: string;
}
