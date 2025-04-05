"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const engin_model_1 = require("../models/engin.model");
const database_1 = require("../config/database");
class DataService {
    enginRepository = database_1.AppDataSource.getRepository(engin_model_1.Engin);
    async getEngins(type) {
        return await this.enginRepository.find();
    }
    async getAllEngins() {
        return await this.enginRepository.find();
    }
    async deleteEngin(numero) {
        await this.enginRepository.delete(numero);
    }
    async addEngin(type, numero) {
        console.log("Je n'ai pas encore codé l'ajout d'un ENGIN !!!");
    }
}
exports.DataService = DataService;
