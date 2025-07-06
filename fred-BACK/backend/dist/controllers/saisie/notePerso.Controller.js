"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotePersoController = void 0;
const database_1 = require("../../config/database");
const notePerso_model_1 = require("./../../models/saisie/notePerso.model");
class NotePersoController {
    constructor() {
        this.getAllNotesPerso = this.getAllNotesPerso.bind(this);
        this.addNotesPerso = this.addNotesPerso.bind(this);
    }
    getAllNotesPerso = async (req, res) => {
        try {
            const notePerso = await database_1.AppDataSource.manager.find(notePerso_model_1.NotePerso);
            console.log('Dans saisie.NotePerso.controllers : ', notePerso);
            res.status(200).json(notePerso); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des NotePerso :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel engin
    addNotesPerso = async (req, res) => {
        try {
            const journéeAAjouter = req.body;
            const nouvelleJournée = new notePerso_model_1.NotePerso();
            nouvelleJournée.date = journéeAAjouter.date;
            nouvelleJournée.titre = journéeAAjouter.titre;
            nouvelleJournée.commentaire = journéeAAjouter.commentaire;
            nouvelleJournée.numero = journéeAAjouter.numero;
            nouvelleJournée.mois = journéeAAjouter.mois;
            nouvelleJournée.annee = journéeAAjouter.annee;
            await database_1.AppDataSource.manager.save(nouvelleJournée);
            console.log("la journée NotePerso a bien ete enregistrée avec l'ID : ", nouvelleJournée.id);
            res.status(201).json(nouvelleJournée);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'une journée NotePerso :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un engin
    deleteNotesPerso = async (req, res) => {
        try {
            const journee = req.params['journee'];
            const numero = req.params['numero'];
            if (!journee || !numero) {
                res.status(400).json({ error: 'Paramètres manquants' });
                return;
            }
            const result = await database_1.AppDataSource.getRepository(notePerso_model_1.NotePerso).delete({
                date: journee,
                numero: Number(numero),
            });
            if (result.affected === 0) {
                res.status(404).json({ message: 'Aucune note trouvée à supprimer' });
                return;
            }
            console.log(`Note Perso n° ${numero} de la journée du ${journee} supprimée.`);
            res.status(200).json({ journee, numero });
        }
        catch (error) {
            console.error('Erreur lors de la suppression de la journée (NotePerso) : ', error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.NotePersoController = NotePersoController;
