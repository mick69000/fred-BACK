import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['nom', 'prenom'])
export class Dirigeant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nom!: string;

  @Column()
  prenom!: string;

  @Column()
  n2!: boolean;
}
