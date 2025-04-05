import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Module } from '../../models/data/module.model'; // Vérifie le chemin

export class ModulesController {
  constructor() {
    this.getAllModules = this.getAllModules.bind(this);
    this.addModule = this.addModule.bind(this);
  }

  getAllModules = async (req: Request, res: Response) => {
    try {
      const modules: Module[] = await AppDataSource.manager.find(Module);
      console.log('Dans data.controllers : ', modules);

      res.status(200).json(modules); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des modules :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel module
  addModule = async (req: Request, res: Response) => {
    try {
      const { type, numero } = req.body;
      if (!type || !numero) {
        return res.status(400).json({ error: 'Type et numéro sont requis' });
      }
      const newModule = new Module();
      newModule.type = type;
      newModule.numero = numero.toUpperCase();

      await AppDataSource.manager.save(newModule);
      console.log(
        "le nouveau module a ete enregistré avec l'ID : ",
        newModule.id
      );
      res.status(201).json(newModule);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un module :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un module
  deleteModule = async (req: Request, res: Response) => {
    try {
      const { numero } = req.params;

      await AppDataSource.getRepository(Module).delete({ numero: numero });
      console.log('Module n° ' + numero + ' supprimé.');
      res.status(200).json(numero);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'module : ", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
