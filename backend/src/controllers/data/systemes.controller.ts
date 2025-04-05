import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Systeme } from '../../models/data/systeme.model'; // Vérifie le chemin

export class SystemesController {
  constructor() {
    this.getAllSystemes = this.getAllSystemes.bind(this);
    this.addSysteme = this.addSysteme.bind(this);
  }

  getAllSystemes = async (req: Request, res: Response) => {
    try {
      const systemes: Systeme[] = await AppDataSource.manager.find(Systeme);
      console.log('Dans data.controllers : ', systemes);

      res.status(200).json(systemes); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des systemes :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel systeme
  addSysteme = async (req: Request, res: Response) => {
    try {
      const { nom } = req.body;
      if (!nom) {
        return res.status(400).json({ error: 'Nom est requis' });
      }
      const newSysteme = new Systeme();
      newSysteme.nom = nom.toUpperCase();

      await AppDataSource.manager.save(newSysteme);
      console.log(
        "la nouvelle systeme a ete enregistrée avec l'ID : ",
        newSysteme.id
      );
      res.status(201).json(newSysteme);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un systeme :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un systeme
  deleteSysteme = async (req: Request, res: Response) => {
    try {
      const { nom } = req.params;

      await AppDataSource.getRepository(Systeme).delete({
        nom: nom,
      });
      console.log('Systeme ' + nom + ' supprimé.');
      res.status(200).json({ nom });
    } catch (error) {
      console.error("Erreur lors de la suppression de l'systeme : ", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
