"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemesController = void 0;
const database_1 = require("../../config/database");
const systeme_model_1 = require("../../models/data/systeme.model"); // Vérifie le chemin
class SystemesController {
    constructor() {
        this.getAllSystemes = this.getAllSystemes.bind(this);
        this.addSysteme = this.addSysteme.bind(this);
    }
    getAllSystemes = async (req, res) => {
        try {
            const systemes = await database_1.AppDataSource.manager.find(systeme_model_1.Systeme);
            console.log('Dans data.controllers : ', systemes);
            res.status(200).json(systemes); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des systemes :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel systeme
    addSysteme = async (req, res) => {
        try {
            const { nom } = req.body;
            if (!nom) {
                return res.status(400).json({ error: 'Nom est requis' });
            }
            const newSysteme = new systeme_model_1.Systeme();
            newSysteme.nom = nom.toUpperCase();
            await database_1.AppDataSource.manager.save(newSysteme);
            console.log("la nouvelle systeme a ete enregistrée avec l'ID : ", newSysteme.id);
            res.status(201).json(newSysteme);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'un systeme :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un systeme
    deleteSysteme = async (req, res) => {
        try {
            const { nom } = req.params;
            await database_1.AppDataSource.getRepository(systeme_model_1.Systeme).delete({
                nom: nom,
            });
            console.log('Systeme ' + nom + ' supprimé.');
            res.status(200).json({ nom });
        }
        catch (error) {
            console.error("Erreur lors de la suppression de l'systeme : ", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.SystemesController = SystemesController;
