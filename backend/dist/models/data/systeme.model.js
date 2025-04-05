"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Systeme = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Systeme = class Systeme extends typeorm_1.BaseEntity {
    id;
    nom;
};
exports.Systeme = Systeme;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Systeme.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Systeme.prototype, "nom", void 0);
exports.Systeme = Systeme = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Systeme);
