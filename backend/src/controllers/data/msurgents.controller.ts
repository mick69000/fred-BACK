import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Msurgent } from '../../models/data/msurgent.model'; // Vérifie le chemin

export class MsurgentsController {
  constructor() {
    this.getAllMsurgents = this.getAllMsurgents.bind(this);
    this.addMsurgent = this.addMsurgent.bind(this);
  }

  getAllMsurgents = async (req: Request, res: Response) => {
    try {
      const msurgents: Msurgent[] = await AppDataSource.manager.find(Msurgent);
      console.log('Dans data.controllers : ', msurgents);

      res.status(200).json(msurgents); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des msurgents :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel msurgent
  addMsurgent = async (req: Request, res: Response) => {
    try {
      const { type, numero } = req.body;
      if (!type || !numero) {
        res.status(400).json({ error: 'Type et numéro sont requis' });
      }
      const newMsurgent = new Msurgent();
      newMsurgent.type = type;
      newMsurgent.numero = numero.toUpperCase();

      await AppDataSource.manager.save(newMsurgent);
      console.log(
        "le nouveau msurgent a ete enregistré avec l'ID : ",
        newMsurgent.id
      );
      res.status(201).json(newMsurgent);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un msurgent :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un msurgent
  deleteMsurgent = async (req: Request, res: Response) => {
    try {
      const { numero } = req.params;

      await AppDataSource.getRepository(Msurgent).delete({ numero: numero });
      console.log('Msurgent n° ' + numero + ' supprimé.');
      res.status(200).json(numero);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'msurgent : ", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
