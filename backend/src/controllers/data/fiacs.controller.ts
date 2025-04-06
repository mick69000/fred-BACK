import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Fiac } from '../../models/data/fiac.model'; // Vérifie le chemin

export class FiacsController {
  constructor() {
    this.getAllFiacs = this.getAllFiacs.bind(this);
    this.addFiac = this.addFiac.bind(this);
  }

  getAllFiacs = async (req: Request, res: Response) => {
    try {
      const fiacs: Fiac[] = await AppDataSource.manager.find(Fiac);
      console.log('Dans data.controllers : ', fiacs);

      res.status(200).json(fiacs); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des fiacs :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel fiac
  addFiac = async (req: Request, res: Response) => {
    try {
      const { type, numero } = req.body;
      if (!type || !numero) {
        res.status(400).json({ error: 'Type et numéro sont requis' });
      }
      const newFiac = new Fiac();
      newFiac.type = type;
      newFiac.numero = numero.toUpperCase();

      await AppDataSource.manager.save(newFiac);
      console.log("le nouveau fiac a ete enregistré avec l'ID : ", newFiac.id);
      res.status(201).json(newFiac);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un fiac :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un fiac
  deleteFiac = async (req: Request, res: Response) => {
    try {
      const { numero } = req.params;

      await AppDataSource.getRepository(Fiac).delete({ numero: numero });
      console.log('Fiac n° ' + numero + ' supprimé.');
      res.status(200).json(numero);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'fiac : ", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
