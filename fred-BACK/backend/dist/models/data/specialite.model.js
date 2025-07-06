"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialite = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Specialite = class Specialite extends typeorm_1.BaseEntity {
    id;
    nom;
};
exports.Specialite = Specialite;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Specialite.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Specialite.prototype, "nom", void 0);
exports.Specialite = Specialite = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Specialite);
