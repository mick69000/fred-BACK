import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['dateDebut'])
export class Hsup extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  dateDebut!: string;

  @Column()
  heureDebut!: string;

  @Column()
  anneeDebut!: number;

  @Column()
  moisDebut!: number;

  @Column()
  dateFin!: string;

  @Column()
  heureFin!: string;

  @Column()
  astreinte!: boolean;

  @Column()
  hsup!: boolean;

  @Column()
  cadeau!: boolean;

  @Column({ nullable: true })
  commentaire!: string;

  @Column()
  heureSaisie!: string;

  @Column()
  heureDuMois!: string;

  @Column()
  heureDeLAnnee!: string;
}
