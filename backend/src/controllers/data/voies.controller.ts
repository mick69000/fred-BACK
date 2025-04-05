import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Voie } from '../../models/data/voie.model'; // Vérifie le chemin

export class VoiesController {
  getAllVoies = async (req: Request, res: Response) => {
    try {
      const voies: Voie[] = await AppDataSource.manager.find(Voie);
      console.log('Dans data.controllers : ', voies);

      res.status(200).json(voies); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des voies :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter une nouvelle voie
  addVoie = async (req: Request, res: Response) => {
    try {
      const { numero } = req.body;
      if (!numero) {
        return res.status(400).json({ error: 'Un numéro de voie est requis' });
      }
      const newVoie = new Voie();
      newVoie.numero = numero.toUpperCase();

      const existingVoie = await AppDataSource.getRepository(Voie).findOneBy({
        numero: newVoie.numero,
      });

      if (existingVoie) {
        return res.status(409).json({ error: 'Cette voie existe déjà' });
      }

      await AppDataSource.manager.save(newVoie);
      console.log(
        "la nouvelle voie a ete enregistrée avec l'ID : ",
        newVoie.id
      );
      res.status(201).json(newVoie);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'une voie :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un voie
  deleteVoie = async (req: Request, res: Response) => {
    try {
      const { numero } = req.params;

      await AppDataSource.getRepository(Voie).delete({ numero: numero });
      console.log('Voie n° ' + numero + ' supprimée.');
      res.status(200).json(numero);
    } catch (error) {
      console.error('Erreur lors de la suppression de la voie : ', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
