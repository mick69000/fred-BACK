import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Specialite } from '../../models/data/specialite.model'; // Vérifie le chemin

export class SpecialitesController {
  constructor() {
    this.getAllSpecialites = this.getAllSpecialites.bind(this);
    this.addSpecialite = this.addSpecialite.bind(this);
  }

  getAllSpecialites = async (req: Request, res: Response) => {
    try {
      const specialites: Specialite[] = await AppDataSource.manager.find(
        Specialite
      );
      console.log('Dans data.controllers : ', specialites);

      res.status(200).json(specialites); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des specialites :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel specialite
  addSpecialite = async (req: Request, res: Response) => {
    try {
      const { nom } = req.body;
      if (!nom) {
        return res.status(400).json({ error: 'Numéro est requis' });
      }
      const newSpecialite = new Specialite();
      newSpecialite.nom = nom.toUpperCase();

      await AppDataSource.manager.save(newSpecialite);
      console.log(
        "la nouvelle specialite a ete enregistrée avec l'ID : ",
        newSpecialite.id
      );
      res.status(201).json(newSpecialite);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'une specialite :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un specialite
  deleteSpecialite = async (req: Request, res: Response) => {
    try {
      const { nom } = req.params;

      await AppDataSource.getRepository(Specialite).delete({
        nom: nom,
      });
      console.log('Specialite ' + nom + ' supprimé.');
      res.status(200).json({ nom });
    } catch (error) {
      console.error("Erreur lors de la suppression de l'specialite : ", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
