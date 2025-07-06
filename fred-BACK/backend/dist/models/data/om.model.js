"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Om = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Om = class Om extends typeorm_1.BaseEntity {
    id;
    type;
    numero;
};
exports.Om = Om;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Om.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 5 }),
    tslib_1.__metadata("design:type", String)
], Om.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 8 }),
    tslib_1.__metadata("design:type", String)
], Om.prototype, "numero", void 0);
exports.Om = Om = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Om);
