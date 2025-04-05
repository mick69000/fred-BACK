"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiacsController = void 0;
const database_1 = require("../../config/database");
const fiac_model_1 = require("../../models/data/fiac.model"); // Vérifie le chemin
class FiacsController {
    constructor() {
        this.getAllFiacs = this.getAllFiacs.bind(this);
        this.addFiac = this.addFiac.bind(this);
    }
    getAllFiacs = async (req, res) => {
        try {
            const fiacs = await database_1.AppDataSource.manager.find(fiac_model_1.Fiac);
            console.log('Dans data.controllers : ', fiacs);
            res.status(200).json(fiacs); // ✅ Bonne utilisation de `status`
        }
        catch (error) {
            console.error('Erreur lors de la récupération des fiacs :', error);
            res.status(500).json({ error: 'Erreur serveur' }); // ✅ Correction ici
        }
    };
    // Ajouter un nouvel fiac
    addFiac = async (req, res) => {
        try {
            const { type, numero } = req.body;
            if (!type || !numero) {
                return res.status(400).json({ error: 'Type et numéro sont requis' });
            }
            const newFiac = new fiac_model_1.Fiac();
            newFiac.type = type;
            newFiac.numero = numero.toUpperCase();
            await database_1.AppDataSource.manager.save(newFiac);
            console.log("le nouveau fiac a ete enregistré avec l'ID : ", newFiac.id);
            res.status(201).json(newFiac);
        }
        catch (error) {
            console.error("Erreur lors de l'ajout d'un fiac :", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
    // Supprime un fiac
    deleteFiac = async (req, res) => {
        try {
            const { numero } = req.params;
            await database_1.AppDataSource.getRepository(fiac_model_1.Fiac).delete({ numero: numero });
            console.log('Fiac n° ' + numero + ' supprimé.');
            res.status(200).json(numero);
        }
        catch (error) {
            console.error("Erreur lors de la suppression de l'fiac : ", error);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    };
}
exports.FiacsController = FiacsController;
