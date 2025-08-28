import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Dirigeant } from '../../models/data/dirigeant.model'; // Vérifie le chemin

export class DirigeantsController {
  constructor() {
    this.getAllDirigeants = this.getAllDirigeants.bind(this);
    this.addDirigeant = this.addDirigeant.bind(this);
  }

  getAllDirigeants = async (req: Request, res: Response) => {
    try {
      const dirigeants: Dirigeant[] = await AppDataSource.manager.find(
        Dirigeant
      );
      console.log('Dans data.controllers : ', dirigeants);

      res.status(200).json(dirigeants); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des dirigeants :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel agent
  addDirigeant = async (req: Request, res: Response) => {
    try {
      const { nom, prenom, n2 } = req.body;
      if (!nom || !prenom) {
        res.status(400).json({ error: 'Nom et Prenom sont requis' });
      }
      const newDirigeant = new Dirigeant();
      newDirigeant.nom = nom.toUpperCase();
      newDirigeant.prenom =
        prenom.substr(0, 1).toUpperCase() + prenom.substr(1).toLowerCase();
      newDirigeant.n2 = n2;

      const existingNom = await AppDataSource.getRepository(
        Dirigeant
      ).findOneBy({
        nom: newDirigeant.nom,
      });
      const existingPrénom = await AppDataSource.getRepository(
        Dirigeant
      ).findOneBy({
        prenom: newDirigeant.prenom,
      });

      if (existingNom && existingPrénom) {
        res.status(409).json({ error: 'Ce dirigeant existe déjà' });
      }
      await AppDataSource.manager.save(newDirigeant);
      console.log(
        "le nouveau dirigeant a ete enregistré avec l'ID : ",
        newDirigeant.id
      );
      res.status(201).json(newDirigeant);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un dirigeant :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un agent
  deleteDirigeant = async (req: Request, res: Response) => {
    try {
      const { nom, prenom } = req.params;
      console.log('nom : ' + nom, 'prenom : ' + prenom + '  va etre supprimer');

      await AppDataSource.getRepository(Dirigeant).delete({
        nom: nom,
        prenom: prenom,
      });
      console.log('Dirigeant ' + nom + ' ' + prenom + ' supprimé.');
      res.status(200).json({ nom, prenom });
    } catch (error) {
      console.error('Erreur lors de la suppression du dirigeant : ', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
