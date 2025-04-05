import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Om } from '../../models/data/om.model'; // Vérifie le chemin

export class OmsController {
  constructor() {
    this.getAllOms = this.getAllOms.bind(this);
    this.addOm = this.addOm.bind(this);
  }

  getAllOms = async (req: Request, res: Response) => {
    try {
      const oms: Om[] = await AppDataSource.manager.find(Om);
      console.log('Dans data.controllers : ', oms);

      res.status(200).json(oms); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des oms :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel om
  addOm = async (req: Request, res: Response) => {
    try {
      const { type, numero } = req.body;
      if (!type || !numero) {
        return res.status(400).json({ error: 'Type et numéro sont requis' });
      }
      const newOm = new Om();
      newOm.type = type;
      newOm.numero = numero.toUpperCase();

      await AppDataSource.manager.save(newOm);
      console.log("le nouveau om a ete enregistré avec l'ID : ", newOm.id);
      res.status(201).json(newOm);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un om :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un om
  deleteOm = async (req: Request, res: Response) => {
    try {
      const { numero } = req.params;

      await AppDataSource.getRepository(Om).delete({ numero: numero });
      console.log('Om n° ' + numero + ' supprimé.');
      res.status(200).json(numero);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'om : ", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
