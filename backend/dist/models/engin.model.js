"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engin = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Engin = class Engin {
    id;
    type;
    numero;
};
exports.Engin = Engin;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)() // Génère automatiquement un ID
    ,
    tslib_1.__metadata("design:type", Number)
], Engin.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)() // Type compatible avec SQLite
    ,
    tslib_1.__metadata("design:type", String)
], Engin.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Engin.prototype, "numero", void 0);
exports.Engin = Engin = tslib_1.__decorate([
    (0, typeorm_1.Entity)() // Vérifie que TypeORM reconnaît bien cette classe comme une entité
], Engin);
