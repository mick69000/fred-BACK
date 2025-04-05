"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HsupastController = void 0;
const database_1 = require("../../config/database");
const hsup_model_1 = require("./../../models/saisie/hsup.model");
class HsupastController {
    constructor() {
        this.getAllHsup = this.getAllHsup.bind(this);
        this.addHsup = this.addHsup.bind(this);
    }
    getAllHsup = async (req, res) => {
        try {
            const hsup = await database_1.AppDataSource.manager.find(hsup_model_1.Hsup);
            console.log('Dans saisie.hsupast.controllers : ', hsup);
            res.status(200).json(hsup); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des hsup :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel engin
    addHsup = async (req, res) => {
        try {
            const { journéeAAjouter } = req.body;
            const nouvelleJournée = new hsup_model_1.Hsup();
            nouvelleJournée.dateDebut = journéeAAjouter.dateDebut;
            nouvelleJournée.heureDebut = journéeAAjouter.heureDebut;
            nouvelleJournée.anneeDebut = journéeAAjouter.anneeDebut;
            nouvelleJournée.moisDebut = journéeAAjouter.moisDebut;
            nouvelleJournée.dateFin = journéeAAjouter.dateFin;
            nouvelleJournée.heureFin = journéeAAjouter.heureFin;
            nouvelleJournée.astreinte = journéeAAjouter.ast;
            nouvelleJournée.hsup = journéeAAjouter.hsup;
            nouvelleJournée.cadeau = journéeAAjouter.cadeau;
            nouvelleJournée.commentaire = journéeAAjouter.commentaire;
            nouvelleJournée.heureSaisie = journéeAAjouter.heureSaisie;
            nouvelleJournée.heureDuMois = journéeAAjouter.heureDuMois;
            nouvelleJournée.heureDeLAnnee = journéeAAjouter.heureDeLAnnee;
            const existingEngin = await database_1.AppDataSource.getRepository(hsup_model_1.Hsup).findOneBy({
                dateDebut: nouvelleJournée.dateDebut,
            });
            if (existingEngin) {
                return res
                    .status(409)
                    .json({ error: 'Cette journée est déjà renseignée' });
            }
            await database_1.AppDataSource.manager.save(nouvelleJournée);
            console.log("les Hsup ont bien ete enregistrés avec l'ID : ", nouvelleJournée.id);
            res.status(201).json(nouvelleJournée);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'une journée :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // récupère les données d'une journée
    getADayHsup = async (req, res) => {
        try {
            const { dateDebut } = req.params;
            return await database_1.AppDataSource.getRepository(hsup_model_1.Hsup).findOneBy({
                dateDebut: dateDebut,
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération de la journée (H sup) : ', error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un engin
    deleteHsup = async (req, res) => {
        try {
            const journee = req.params['journee'];
            await database_1.AppDataSource.getRepository(hsup_model_1.Hsup).delete({ dateDebut: journee });
            console.log('Journée du ' + journee + ' supprimée (H sup).');
            res.status(200).json(journee);
        }
        catch (error) {
            console.error('Erreur lors de la suppression de la journée (H sup) : ', error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.HsupastController = HsupastController;
