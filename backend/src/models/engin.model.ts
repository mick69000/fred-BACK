import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Cette annotation définit l'entité
export class Engin {
  @PrimaryGeneratedColumn() // Cette annotation définit la clé primaire
  id: number;

  @Column() // Cette annotation définit une colonne
  type: string;

  @Column() // Cette annotation définit une colonne
  numero: string;
}
