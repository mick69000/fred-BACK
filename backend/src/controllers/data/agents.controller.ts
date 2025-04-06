import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Agent } from '../../models/data/agent.model'; // Vérifie le chemin

export class AgentsController {
  constructor() {
    this.getAllAgents = this.getAllAgents.bind(this);
    this.addAgent = this.addAgent.bind(this);
  }

  getAllAgents = async (req: Request, res: Response) => {
    try {
      const agents: Agent[] = await AppDataSource.manager.find(Agent);
      console.log('Dans data.controllers : ', agents);

      res.status(200).json(agents); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des agents :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel agent
  addAgent = async (req: Request, res: Response) => {
    try {
      const { nom, prenom } = req.body;
      if (!nom || !prenom) {
        res.status(400).json({ error: 'Nom et Prenom sont requis' });
      }
      const newAgent = new Agent();
      newAgent.nom = nom.toUpperCase();
      newAgent.prenom =
        prenom.substr(0, 1).toUpperCase() + prenom.substr(1).toLowerCase();

      const existingAgent = await AppDataSource.getRepository(Agent).findOneBy({
        nom: newAgent.nom,
        prenom: newAgent.prenom,
      });

      if (existingAgent) {
        res.status(409).json({ error: 'Cet agent existe déjà' });
      }
      await AppDataSource.manager.save(newAgent);
      console.log("le nouvel agent a ete enregistré avec l'ID : ", newAgent.id);
      res.status(201).json(newAgent);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un agent :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime un agent
  deleteAgent = async (req: Request, res: Response) => {
    try {
      const { nom, prenom } = req.params;
      console.log('nom : ' + nom, 'prenom : ' + prenom);

      await AppDataSource.getRepository(Agent).delete({
        nom: nom,
        prenom: prenom,
      });
      console.log('Agent ' + nom + ' ' + prenom + ' supprimé.');
      res.status(200).json({ nom, prenom });
    } catch (error) {
      console.error("Erreur lors de la suppression de l'agent : ", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
