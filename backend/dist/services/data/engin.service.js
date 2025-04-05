"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnginService = void 0;
const engin_model_1 = require("../../models/data/engin.model");
const database_1 = require("../../config/database");
class EnginService {
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
        const newEngin = this.enginRepository.create({ type, numero });
        return await this.enginRepository.save(newEngin);
    }
}
exports.EnginService = EnginService;
