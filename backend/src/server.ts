import { AppDataSource } from './config/database';
import dataRoutes from './routes/data.routes';
import express from 'express';
import cors from 'cors';
import saisieRoutes from './routes/saisie.routes';

const app = express();
const PORT = process.env['PORT'] || 3000;

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('✅ Base de données connectée !');
    app.use('/api', dataRoutes); // ✅ Monte les routes après la connexion
    app.use('/api', saisieRoutes); // ✅ Monte les routes après la connexion
    console.log(
      '✅ Middleware chargés:',
      dataRoutes.stack.map((r) => r.name || 'anonymous')
    );

    app.listen(PORT, () => {
      console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Erreur de connexion à la base :', error);
  });
