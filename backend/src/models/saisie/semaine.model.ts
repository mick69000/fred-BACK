import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Semaine extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  semaine!: string;

  @Column()
  astreinte!: boolean;

  @Column()
  month!: string;

  @Column()
  annee!: number;
}
