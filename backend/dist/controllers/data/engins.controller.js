"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnginsController = void 0;
const database_1 = require("../../config/database");
const engin_model_1 = require("../../models/data/engin.model"); // Vérifie le chemin
class EnginsController {
    constructor() {
        this.getAllEngins = this.getAllEngins.bind(this);
        this.addEngin = this.addEngin.bind(this);
    }
    getAllEngins = async (req, res) => {
        try {
            const engins = await database_1.AppDataSource.manager.find(engin_model_1.Engin);
            console.log('Dans data.controllers : ', engins);
            res.status(200).json(engins); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des engins :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel engin
    addEngin = async (req, res) => {
        try {
            const { type, numero } = req.body;
            if (!type || !numero) {
                res.status(400).json({ error: 'Type et numéro sont requis' });
            }
            const newEngin = new engin_model_1.Engin();
            newEngin.type = type;
            newEngin.numero = numero.toUpperCase();
            const existingEngin = await database_1.AppDataSource.getRepository(engin_model_1.Engin).findOneBy({
                type: newEngin.type,
                numero: newEngin.numero,
            });
            if (existingEngin) {
                res.status(409).json({ error: 'Cet engin existe déjà' });
            }
            await database_1.AppDataSource.manager.save(newEngin);
            console.log("le nouveau engin a ete enregistré avec l'ID : ", newEngin.id);
            res.status(201).json(newEngin);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'un engin :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un engin
    deleteEngin = async (req, res) => {
        try {
            const { numero } = req.params;
            await database_1.AppDataSource.getRepository(engin_model_1.Engin).delete({ numero: numero });
            console.log('Engin n° ' + numero + ' supprimé.');
            res.status(200).json(numero);
        }
        catch (error) {
            console.error("Erreur lors de la suppression de l'engin : ", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.EnginsController = EnginsController;
