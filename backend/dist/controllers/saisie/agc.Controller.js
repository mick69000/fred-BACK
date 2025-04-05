"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgcController = void 0;
const database_1 = require("../../config/database");
const agc_model_1 = require("./../../models/saisie/agc.model");
class AgcController {
    constructor() {
        this.getAllAgc = this.getAllAgc.bind(this);
        this.addAgc = this.addAgc.bind(this);
    }
    getAllAgc = async (req, res) => {
        try {
            const agc = await database_1.AppDataSource.manager.find(agc_model_1.Agc);
            console.log('Dans saisie.agc.controllers : ', agc);
            res.status(200).json(agc); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des AGC :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel engin
    addAgc = async (req, res) => {
        try {
            const journéeAAjouter = req.body;
            const nouvelleJournée = new agc_model_1.Agc();
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
            const existingEngin = await database_1.AppDataSource.getRepository(agc_model_1.Agc).findOneBy({
                date: nouvelleJournée.date,
            });
            if (existingEngin) {
                return res
                    .status(409)
                    .json({ error: 'Cette journée est déjà renseignée' });
            }
            await database_1.AppDataSource.manager.save(nouvelleJournée);
            console.log("la journée Agc a bien ete enregistrée avec l'ID : ", nouvelleJournée.id);
            res.status(201).json(nouvelleJournée);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'une journée :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // récupère les données d'une journée
    getADayAgc = async (req, res) => {
        try {
            const { date } = req.params;
            return await database_1.AppDataSource.getRepository(agc_model_1.Agc).findOneBy({
                date: date,
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération de la journée (AGC) : ', error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un engin
    deleteAgc = async (req, res) => {
        try {
            const journee = req.params['journee'];
            await database_1.AppDataSource.getRepository(agc_model_1.Agc).delete({ date: journee });
            console.log('Journée du ' + journee + ' supprimée (AGC).');
            res.status(200).json(journee);
        }
        catch (error) {
            console.error('Erreur lors de la suppression de la journée (AGC) : ', error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.AgcController = AgcController;
