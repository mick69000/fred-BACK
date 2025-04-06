import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Firex } from '../../models/data/firex.model'; // Vérifie le chemin

export class FirexsController {
  constructor() {
    this.getAllFirexs = this.getAllFirexs.bind(this);
    this.addFirex = this.addFirex.bind(this);
  }

  getAllFirexs = async (req: Request, res: Response) => {
    try {
      const firexs: Firex[] = await AppDataSource.manager.find(Firex);
      console.log('Dans data.controllers : ', firexs);

      res.status(200).json(firexs); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des firexs :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel firex
  addFirex = async (req: Request, res: Response) => {
    try {
      const { type, numero } = req.body;
      if (!type || !numero) {
        res.status(400).json({ error: 'Type et numéro sont requis' });
      }
      const newFirex = new Firex();
      newFirex.type = type;
      newFirex.numero = numero.toUpperCase();

      await AppDataSource.manager.save(newFirex);
      console.log(
        "le nouveau firex a ete enregistré avec l'ID : ",
        newFirex.id
      );
      res.status(201).json(newFirex);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un firex :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un firex
  deleteFirex = async (req: Request, res: Response) => {
    try {
      const { numero } = req.params;

      await AppDataSource.getRepository(Firex).delete({ numero: numero });
      console.log('Firex n° ' + numero + ' supprimé.');
      res.status(200).json(numero);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'firex : ", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
