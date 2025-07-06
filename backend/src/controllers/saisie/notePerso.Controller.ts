import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { NotePerso } from './../../models/saisie/notePerso.model';
import { MoreThan } from 'typeorm';

export class NotePersoController {
  constructor() {
    this.getAllNotesPerso = this.getAllNotesPerso.bind(this);
    this.addNotesPerso = this.addNotesPerso.bind(this);
    this.updateNotePerso = this.updateNotePerso.bind(this);
  }

  getAllNotesPerso = async (req: Request, res: Response) => {
    try {
      const notePerso: NotePerso[] = await AppDataSource.manager.find(
        NotePerso
      );
      console.log('Dans saisie.NotePerso.controllers : ', notePerso);

      res.status(200).json(notePerso); // ✅ Bonne utilisation de `status`
    } catch (error) {
      console.error('Erreur lors de la récupération des NotePerso :', error);
      res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
    }
  };

  // Ajouter un nouvel engin
  addNotesPerso = async (req: Request, res: Response) => {
    try {
      const journéeAAjouter = req.body;
      const nouvelleJournée = new NotePerso();
      nouvelleJournée.date = journéeAAjouter.date;
      nouvelleJournée.titre = journéeAAjouter.titre;
      nouvelleJournée.commentaire = journéeAAjouter.commentaire;
      nouvelleJournée.numero = journéeAAjouter.numero;
      nouvelleJournée.mois = journéeAAjouter.mois;
      nouvelleJournée.annee = journéeAAjouter.annee;

      await AppDataSource.manager.save(nouvelleJournée);
      console.log(
        "la journée NotePerso a bien ete enregistrée avec l'ID : ",
        nouvelleJournée.id
      );
      res.status(201).json(nouvelleJournée);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'une journée NotePerso :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

  public async updateNotePerso(req: Request, res: Response) {
    try {
      const { id, titre, commentaire } = req.body;

      await AppDataSource.getRepository(NotePerso).update(
        { id: id },
        { titre: titre, commentaire: commentaire }
      );
      console.log('la journée NotePerso a bien ete mise à jour ');
      res.status(201).json({ message: 'Note Perso mise à jour' });
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la NotePerso :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  }

  // Supprime ue note perso
  deleteNotesPerso = async (req: Request, res: Response) => {
    try {
      const journee = req.params['journee'];
      const numero = req.params['numero'];

      if (!journee || !numero) {
        res.status(400).json({ error: 'Paramètres manquants' });
        return;
      }

      const result = await AppDataSource.getRepository(NotePerso).delete({
        date: journee,
        numero: Number(numero),
      });

      if (result.affected === 0) {
        return res
          .status(404)
          .json({ message: 'Aucune note trouvée à supprimer' });
      }
      // 2. Récupérer les notes avec un numéro supérieur
      const notesAShift = await AppDataSource.getRepository(NotePerso).find({
        where: {
          date: journee,
          numero: MoreThan(Number(numero)),
        },
        order: { numero: 'ASC' }, // très important
      });

      // 3. Décrémenter les numéros
      for (const note of notesAShift) {
        note.numero -= 1;
        await AppDataSource.manager.save(note); // ou .getRepository().save(note)
      }

      console.log(
        `Note Perso n° ${numero} de la journée du ${journee} supprimée.`
      );
      res.status(200).json({ journee, numero });
    } catch (error) {
      console.error(
        'Erreur lors de la suppression de la journée (NotePerso) : ',
        error
      );
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };
}
