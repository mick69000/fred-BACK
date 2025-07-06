"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsurgentsController = void 0;
const database_1 = require("../../config/database");
const msurgent_model_1 = require("../../models/data/msurgent.model"); // Vérifie le chemin
class MsurgentsController {
    constructor() {
        this.getAllMsurgents = this.getAllMsurgents.bind(this);
        this.addMsurgent = this.addMsurgent.bind(this);
    }
    getAllMsurgents = async (req, res) => {
        try {
            const msurgents = await database_1.AppDataSource.manager.find(msurgent_model_1.Msurgent);
            console.log('Dans data.controllers : ', msurgents);
            res.status(200).json(msurgents); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des msurgents :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel msurgent
    addMsurgent = async (req, res) => {
        try {
            const { type, numero } = req.body;
            if (!type || !numero) {
                res.status(400).json({ error: 'Type et numéro sont requis' });
            }
            const newMsurgent = new msurgent_model_1.Msurgent();
            newMsurgent.type = type;
            newMsurgent.numero = numero.toUpperCase();
            await database_1.AppDataSource.manager.save(newMsurgent);
            console.log("le nouveau msurgent a ete enregistré avec l'ID : ", newMsurgent.id);
            res.status(201).json(newMsurgent);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'un msurgent :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un msurgent
    deleteMsurgent = async (req, res) => {
        try {
            const { numero } = req.params;
            await database_1.AppDataSource.getRepository(msurgent_model_1.Msurgent).delete({ numero: numero });
            console.log('Msurgent n° ' + numero + ' supprimé.');
            res.status(200).json(numero);
        }
        catch (error) {
            console.error("Erreur lors de la suppression de l'msurgent : ", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.MsurgentsController = MsurgentsController;
