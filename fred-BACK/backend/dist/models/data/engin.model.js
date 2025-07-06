"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engin = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Engin = class Engin extends typeorm_1.BaseEntity {
    id;
    type;
    numero;
};
exports.Engin = Engin;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Engin.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 5 }),
    tslib_1.__metadata("design:type", String)
], Engin.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 8 }),
    tslib_1.__metadata("design:type", String)
], Engin.prototype, "numero", void 0);
exports.Engin = Engin = tslib_1.__decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['numero'])
], Engin);
