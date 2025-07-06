"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voie = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Voie = class Voie extends typeorm_1.BaseEntity {
    id;
    numero;
};
exports.Voie = Voie;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Voie.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Voie.prototype, "numero", void 0);
exports.Voie = Voie = tslib_1.__decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['numero'])
], Voie);
