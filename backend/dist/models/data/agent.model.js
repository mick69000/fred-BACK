"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agent = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Agent = class Agent extends typeorm_1.BaseEntity {
    id;
    nom;
    prenom;
};
exports.Agent = Agent;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Agent.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Agent.prototype, "nom", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Agent.prototype, "prenom", void 0);
exports.Agent = Agent = tslib_1.__decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['nom', 'prenom'])
], Agent);
