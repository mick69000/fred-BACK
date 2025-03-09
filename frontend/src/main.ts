import { bootstrapApplication } from '@angular/platform-browser';
import 'reflect-metadata';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { defineCustomElements } from 'wcs-core/loader';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { DataSource } from 'typeorm';
import { Engin } from '../../backend/src/models/engin.model';

registerLocaleData(fr.default);
defineCustomElements();

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'nsz.db',
  entities: [Engin],
  synchronize: true,
  logging: true,
});
dataSource
  .initialize()
  .then(() => {
    console.log('Connexion à la base de données réussie');
  })
  .catch((error) => {
    console.error('Erreur de connexion à la base de données', error);
  });

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes)],
}).catch((err) => console.error(err));
