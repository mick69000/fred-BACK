import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Engin } from '../../models/data/engin.model'; // Vérifie le chemin

export class EnginsController {
  constructor() {
    this.getAllEngins = this.getAllEngins.bind(this);
    this.addEngin = this.addEngin.bind(this);
  }

  getAllEngins = async (req: Request, res: Response) => {
    try {
      const engins: Engin[] = await AppDataSource.manager.find(Engin);
      console.log('Dans data.controllers : ', engins);

      res.status(200).json(engins); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des engins :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel engin
  addEngin = async (req: Request, res: Response) => {
    try {
      const { type, numero } = req.body;
      if (!type || !numero) {
        res.status(400).json({ error: 'Type et numéro sont requis' });
      }
      const newEngin = new Engin();
      newEngin.type = type;
      newEngin.numero = numero.toUpperCase();

      const existingEngin = await AppDataSource.getRepository(Engin).findOneBy({
        type: newEngin.type,
        numero: newEngin.numero,
      });

      if (existingEngin) {
        res.status(409).json({ error: 'Cet engin existe déjà' });
      }

      await AppDataSource.manager.save(newEngin);
      console.log(
        "le nouveau engin a ete enregistré avec l'ID : ",
        newEngin.id
      );
      res.status(201).json(newEngin);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un engin :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un engin
  deleteEngin = async (req: Request, res: Response) => {
    try {
      const { numero } = req.params;

      await AppDataSource.getRepository(Engin).delete({ numero: numero });
      console.log('Engin n° ' + numero + ' supprimé.');
      res.status(200).json(numero);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'engin : ", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
