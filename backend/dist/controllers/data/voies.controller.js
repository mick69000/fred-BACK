"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiesController = void 0;
const database_1 = require("../../config/database");
const voie_model_1 = require("../../models/data/voie.model"); // Vérifie le chemin
class VoiesController {
    getAllVoies = async (req, res) => {
        try {
            const voies = await database_1.AppDataSource.manager.find(voie_model_1.Voie);
            console.log('Dans data.controllers : ', voies);
            res.status(200).json(voies); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des voies :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter une nouvelle voie
    addVoie = async (req, res) => {
        try {
            const { numero } = req.body;
            if (!numero) {
                return res.status(400).json({ error: 'Un numéro de voie est requis' });
            }
            const newVoie = new voie_model_1.Voie();
            newVoie.numero = numero.toUpperCase();
            const existingVoie = await database_1.AppDataSource.getRepository(voie_model_1.Voie).findOneBy({
                numero: newVoie.numero,
            });
            if (existingVoie) {
                return res.status(409).json({ error: 'Cette voie existe déjà' });
            }
            await database_1.AppDataSource.manager.save(newVoie);
            console.log("la nouvelle voie a ete enregistrée avec l'ID : ", newVoie.id);
            res.status(201).json(newVoie);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'une voie :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un voie
    deleteVoie = async (req, res) => {
        try {
            const { numero } = req.params;
            await database_1.AppDataSource.getRepository(voie_model_1.Voie).delete({ numero: numero });
            console.log('Voie n° ' + numero + ' supprimée.');
            res.status(200).json(numero);
        }
        catch (error) {
            console.error('Erreur lors de la suppression de la voie : ', error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.VoiesController = VoiesController;
