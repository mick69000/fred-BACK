import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Msurgent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 5 })
  type!: string;

  @Column({ length: 8 })
  numero!: string;
}
