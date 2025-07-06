"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirexsController = void 0;
const database_1 = require("../../config/database");
const firex_model_1 = require("../../models/data/firex.model"); // Vérifie le chemin
class FirexsController {
    constructor() {
        this.getAllFirexs = this.getAllFirexs.bind(this);
        this.addFirex = this.addFirex.bind(this);
    }
    getAllFirexs = async (req, res) => {
        try {
            const firexs = await database_1.AppDataSource.manager.find(firex_model_1.Firex);
            console.log('Dans data.controllers : ', firexs);
            res.status(200).json(firexs); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des firexs :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel firex
    addFirex = async (req, res) => {
        try {
            const { type, numero } = req.body;
            if (!type || !numero) {
                res.status(400).json({ error: 'Type et numéro sont requis' });
            }
            const newFirex = new firex_model_1.Firex();
            newFirex.type = type;
            newFirex.numero = numero.toUpperCase();
            await database_1.AppDataSource.manager.save(newFirex);
            console.log("le nouveau firex a ete enregistré avec l'ID : ", newFirex.id);
            res.status(201).json(newFirex);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'un firex :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un firex
    deleteFirex = async (req, res) => {
        try {
            const { numero } = req.params;
            await database_1.AppDataSource.getRepository(firex_model_1.Firex).delete({ numero: numero });
            console.log('Firex n° ' + numero + ' supprimé.');
            res.status(200).json(numero);
        }
        catch (error) {
            console.error("Erreur lors de la suppression de l'firex : ", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.FirexsController = FirexsController;
