import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class R2n extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  date!: string;

  @Column()
  engin!: string;

  @Column()
  voie!: string;

  @Column()
  module!: string;

  @Column()
  fiac!: string;

  @Column()
  om!: string;

  @Column()
  firex!: string;

  @Column()
  msurgent!: string;

  @Column()
  systeme!: string;

  @Column()
  commentaire!: string;

  @Column()
  agent1!: string;

  @Column()
  agent2!: string;

  @Column()
  agent3!: string;

  @Column()
  agent4!: string;

  @Column()
  specialite1!: string;

  @Column()
  specialite2!: string;

  @Column()
  specialite3!: string;

  @Column()
  specialite4!: string;

  @Column()
  heure1!: string;

  @Column()
  heure2!: string;

  @Column()
  heure3!: string;

  @Column()
  heure4!: string;

  @Column()
  jour1!: string;

  @Column()
  jour2!: string;

  @Column()
  jour3!: string;

  @Column()
  jour4!: string;

  @Column()
  depannage!: boolean;

  @Column()
  pointage!: boolean;

  @Column()
  en_cours!: boolean;

  @Column()
  valide!: boolean;

  @Column()
  dsmat!: boolean;

  @Column()
  osmose!: boolean;

  @Column()
  mois!: number;

  @Column()
  annee!: number;
}
