import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class NotePerso extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  date!: string;

  @Column()
  titre!: string;

  @Column()
  commentaire!: string;

  @Column()
  numero!: number;

  @Column()
  mois!: number;

  @Column()
  annee!: number;
}
