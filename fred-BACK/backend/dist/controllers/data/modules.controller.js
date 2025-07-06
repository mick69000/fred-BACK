"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesController = void 0;
const database_1 = require("../../config/database");
const module_model_1 = require("../../models/data/module.model"); // Vérifie le chemin
class ModulesController {
    constructor() {
        this.getAllModules = this.getAllModules.bind(this);
        this.addModule = this.addModule.bind(this);
    }
    getAllModules = async (req, res) => {
        try {
            const modules = await database_1.AppDataSource.manager.find(module_model_1.Module);
            console.log('Dans data.controllers : ', modules);
            res.status(200).json(modules); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des modules :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel module
    addModule = async (req, res) => {
        try {
            const { type, numero } = req.body;
            if (!type || !numero) {
                res.status(400).json({ error: 'Type et numéro sont requis' });
            }
            const newModule = new module_model_1.Module();
            newModule.type = type;
            newModule.numero = numero.toUpperCase();
            await database_1.AppDataSource.manager.save(newModule);
            console.log("le nouveau module a ete enregistré avec l'ID : ", newModule.id);
            res.status(201).json(newModule);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'un module :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un module
    deleteModule = async (req, res) => {
        try {
            const { numero } = req.params;
            await database_1.AppDataSource.getRepository(module_model_1.Module).delete({ numero: numero });
            console.log('Module n° ' + numero + ' supprimé.');
            res.status(200).json(numero);
        }
        catch (error) {
            console.error("Erreur lors de la suppression de l'module : ", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.ModulesController = ModulesController;
