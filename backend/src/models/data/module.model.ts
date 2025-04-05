import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Module extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 5 })
  type!: string;

  @Column({ length: 8 })
  numero!: string;
}
