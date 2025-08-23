import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Agent } from '../models/data/agent.model';
import { Engin } from '../models/data/engin.model';
import { Fiac } from '../models/data/fiac.model';
import { Firex } from '../models/data/firex.model';
import { Module } from '../models/data/module.model';
import { Msurgent } from '../models/data/msurgent.model';
import { Om } from '../models/data/om.model';
import { Specialite } from '../models/data/specialite.model';
import { Systeme } from '../models/data/systeme.model';
import { Voie } from '../models/data/voie.model';
import { Hsup } from '../models/saisie/hsup.model';
import { Agc } from '../models/saisie/agc.model';
import { Ng } from '../models/saisie/ng.model';
import { R2n } from '../models/saisie/r2n.model';
import { NotePerso } from '../models/saisie/notePerso.model';
import { Semaine } from '../models/saisie/semaine.model';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'nsz.db',
  entities: [
    Agent,
    Engin,
    Fiac,
    Firex,
    Module,
    Msurgent,
    Om,
    Specialite,
    Systeme,
    Voie,
    Hsup,
    Agc,
    Ng,
    R2n,
    NotePerso,
    Semaine,
  ],
  synchronize: true, // Synchronisation des entités avec la base de données (pas recommandé en production)
  logging: true,
});
