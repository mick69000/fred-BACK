"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgController = void 0;
const database_1 = require("../../config/database");
const ng_model_1 = require("./../../models/saisie/ng.model");
class NgController {
    constructor() {
        this.getAllNg = this.getAllNg.bind(this);
        this.addNg = this.addNg.bind(this);
    }
    getAllNg = async (req, res) => {
        try {
            const ng = await database_1.AppDataSource.manager.find(ng_model_1.Ng);
            console.log('Dans saisie.ng.controllers : ', ng);
            res.status(200).json(ng); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des NG :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel engin
    addNg = async (req, res) => {
        try {
            const journéeAAjouter = req.body;
            const nouvelleJournée = new ng_model_1.Ng();
            nouvelleJournée.date = journéeAAjouter.date;
            nouvelleJournée.engin = journéeAAjouter.engin;
            nouvelleJournée.voie = journéeAAjouter.voie;
            nouvelleJournée.module = journéeAAjouter.module;
            nouvelleJournée.fiac = journéeAAjouter.fiac;
            nouvelleJournée.om = journéeAAjouter.om;
            nouvelleJournée.firex = journéeAAjouter.firex;
            nouvelleJournée.msurgent = journéeAAjouter.msurgent;
            nouvelleJournée.systeme = journéeAAjouter.systeme;
            nouvelleJournée.commentaire = journéeAAjouter.commentaire;
            nouvelleJournée.specialite1 = journéeAAjouter.specialite1;
            nouvelleJournée.specialite2 = journéeAAjouter.specialite2;
            nouvelleJournée.specialite3 = journéeAAjouter.specialite3;
            nouvelleJournée.specialite4 = journéeAAjouter.specialite4;
            nouvelleJournée.agent1 = journéeAAjouter.agent1;
            nouvelleJournée.agent2 = journéeAAjouter.agent2;
            nouvelleJournée.agent3 = journéeAAjouter.agent3;
            nouvelleJournée.agent4 = journéeAAjouter.agent4;
            nouvelleJournée.heure1 = journéeAAjouter.heure1;
            nouvelleJournée.heure2 = journéeAAjouter.heure2;
            nouvelleJournée.heure3 = journéeAAjouter.heure3;
            nouvelleJournée.heure4 = journéeAAjouter.heure4;
            nouvelleJournée.jour1 = journéeAAjouter.jour1;
            nouvelleJournée.jour2 = journéeAAjouter.jour2;
            nouvelleJournée.jour3 = journéeAAjouter.jour3;
            nouvelleJournée.jour4 = journéeAAjouter.jour4;
            nouvelleJournée.depannage = journéeAAjouter.depannage;
            nouvelleJournée.pointage = journéeAAjouter.pointage;
            nouvelleJournée.en_cours = journéeAAjouter.en_cours;
            nouvelleJournée.valide = journéeAAjouter.valide;
            nouvelleJournée.dsmat = journéeAAjouter.dsmat;
            nouvelleJournée.osmose = journéeAAjouter.osmose;
            nouvelleJournée.mois = journéeAAjouter.mois;
            nouvelleJournée.annee = journéeAAjouter.annee;
            const existingEngin = await database_1.AppDataSource.getRepository(ng_model_1.Ng).findOneBy({
                date: nouvelleJournée.date,
            });
            if (existingEngin) {
                return res
                    .status(409)
                    .json({ error: 'Cette journée est déjà renseignée' });
            }
            await database_1.AppDataSource.manager.save(nouvelleJournée);
            console.log("la journée Ng a bien ete enregistrée avec l'ID : ", nouvelleJournée.id);
            res.status(201).json(nouvelleJournée);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'une journée :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // récupère les données d'une journée
    getADayNg = async (req, res) => {
        try {
            const { date } = req.params;
            return await database_1.AppDataSource.getRepository(ng_model_1.Ng).findOneBy({
                date: date,
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération de la journée (NG) : ', error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un engin
    deleteNg = async (req, res) => {
        try {
            const journee = req.params['journee'];
            await database_1.AppDataSource.getRepository(ng_model_1.Ng).delete({ date: journee });
            console.log('Journée du ' + journee + ' supprimée (NG).');
            res.status(200).json(journee);
        }
        catch (error) {
            console.error('Erreur lors de la suppression de la journée (NG) : ', error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.NgController = NgController;
