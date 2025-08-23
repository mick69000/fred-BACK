import { Request, RequestHandler, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Semaine } from './../../models/saisie/semaine.model';
import { Int32, MoreThan } from 'typeorm';

export class SemaineController {
  constructor() {
    this.getAllSemaines = this.getAllSemaines.bind(this);
    this.addSemaines = this.addSemaines.bind(this);
    this.updateSemaines = this.updateSemaines.bind(this);
  }

  getAllSemaines = async (req: Request, res: Response) => {
    try {
      const semaine: Semaine[] = await AppDataSource.manager.find(Semaine);
      console.log('Dans saisie.semaine.controllers : ', semaine);

      res.status(200).json(semaine); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des Semaines :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter une nouvelle année
  addSemaines = async (req: Request, res: Response) => {
    const semainesAAjouter: Semaine[] = req.body;

    try {
      const repo = AppDataSource.getRepository(Semaine);

      // Ici TypeORM accepte directement un tableau d'objets
      const saved = await repo.save(semainesAAjouter);

      res.status(201).json({
        message: `${saved.length} semaines enregistrées avec succès.`,
        data: saved,
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout des Semaines :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Met à jour les semaines de l'année
  public updateSemaines: RequestHandler = async (
    req: Request,
    res: Response
  ) => {
    try {
      const semaines: { semaine: string; astreinte: boolean }[] = req.body;

      if (!Array.isArray(semaines) || semaines.length === 0) {
        res.status(400).json({ error: 'Tableau de semaines requis' });
        return;
      }

      for (const semaine of semaines) {
        await AppDataSource.getRepository(Semaine).update(
          { semaine: semaine.semaine },
          { astreinte: semaine.astreinte }
        );
      }

      res
        .status(200)
        .json({ message: `${semaines.length} semaines mises à jour` });
    } catch (error) {
      console.error('Erreur lors de la mise à jour des semaines :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  // Supprime les semaines de l'année
  deleteSemaines = async (req: Request, res: Response): Promise<void> => {
    let annéeASupprimer;
    try {
      const année = req.params['année'];

      if (année) {
        annéeASupprimer = parseInt(année);
      } else {
        res.status(400).json({ error: 'Paramètres manquants' });
      }

      const result = await AppDataSource.getRepository(Semaine).delete({
        annee: annéeASupprimer,
      });

      if (result.affected === 0) {
        res.status(404).json({ message: "l'année %s n'existe pas", année });
      }

      console.log(`Les semaines d'astreinte de l'année ${année} supprimées.`);
      res.status(200).json({ annéeASupprimer });
    } catch (error) {
      console.error(
        `Erreur lors de la suppression des semaines de l'année ${annéeASupprimer}.`,
        error
      );
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
