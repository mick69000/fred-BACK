"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OmsController = void 0;
const database_1 = require("../../config/database");
const om_model_1 = require("../../models/data/om.model"); // Vérifie le chemin
class OmsController {
    constructor() {
        this.getAllOms = this.getAllOms.bind(this);
        this.addOm = this.addOm.bind(this);
    }
    getAllOms = async (req, res) => {
        try {
            const oms = await database_1.AppDataSource.manager.find(om_model_1.Om);
            console.log('Dans data.controllers : ', oms);
            res.status(200).json(oms); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des oms :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel om
    addOm = async (req, res) => {
        try {
            const { type, numero } = req.body;
            if (!type || !numero) {
                return res.status(400).json({ error: 'Type et numéro sont requis' });
            }
            const newOm = new om_model_1.Om();
            newOm.type = type;
            newOm.numero = numero.toUpperCase();
            await database_1.AppDataSource.manager.save(newOm);
            console.log("le nouveau om a ete enregistré avec l'ID : ", newOm.id);
            res.status(201).json(newOm);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'un om :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un om
    deleteOm = async (req, res) => {
        try {
            const { numero } = req.params;
            await database_1.AppDataSource.getRepository(om_model_1.Om).delete({ numero: numero });
            console.log('Om n° ' + numero + ' supprimé.');
            res.status(200).json(numero);
        }
        catch (error) {
            console.error("Erreur lors de la suppression de l'om : ", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.OmsController = OmsController;
