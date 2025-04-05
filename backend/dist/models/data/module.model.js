"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Module = class Module extends typeorm_1.BaseEntity {
    id;
    type;
    numero;
};
exports.Module = Module;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Module.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 5 }),
    tslib_1.__metadata("design:type", String)
], Module.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 8 }),
    tslib_1.__metadata("design:type", String)
], Module.prototype, "numero", void 0);
exports.Module = Module = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Module);
