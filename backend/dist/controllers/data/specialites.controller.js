"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialitesController = void 0;
const database_1 = require("../../config/database");
const specialite_model_1 = require("../../models/data/specialite.model"); // Vérifie le chemin
class SpecialitesController {
    constructor() {
        this.getAllSpecialites = this.getAllSpecialites.bind(this);
        this.addSpecialite = this.addSpecialite.bind(this);
    }
    getAllSpecialites = async (req, res) => {
        try {
            const specialites = await database_1.AppDataSource.manager.find(specialite_model_1.Specialite);
            console.log('Dans data.controllers : ', specialites);
            res.status(200).json(specialites); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des specialites :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel specialite
    addSpecialite = async (req, res) => {
        try {
            const { nom } = req.body;
            if (!nom) {
                return res.status(400).json({ error: 'Numéro est requis' });
            }
            const newSpecialite = new specialite_model_1.Specialite();
            newSpecialite.nom = nom.toUpperCase();
            await database_1.AppDataSource.manager.save(newSpecialite);
            console.log("la nouvelle specialite a ete enregistrée avec l'ID : ", newSpecialite.id);
            res.status(201).json(newSpecialite);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'une specialite :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un specialite
    deleteSpecialite = async (req, res) => {
        try {
            const { nom } = req.params;
            await database_1.AppDataSource.getRepository(specialite_model_1.Specialite).delete({
                nom: nom,
            });
            console.log('Specialite ' + nom + ' supprimé.');
            res.status(200).json({ nom });
        }
        catch (error) {
            console.error("Erreur lors de la suppression de l'specialite : ", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.SpecialitesController = SpecialitesController;
