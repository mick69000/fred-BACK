"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
const database_1 = require("../config/database");
const engin_model_1 = require("../models/engin.model"); // Vérifie le chemin
class DataController {
    getAllEngins = async (req, res) => {
        try {
            const engins = await database_1.AppDataSource.getRepository(engin_model_1.Engin).find();
            res.status(200).json(engins); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des engins :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
}
exports.DataController = DataController;
