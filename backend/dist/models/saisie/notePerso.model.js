"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotePerso = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let NotePerso = class NotePerso extends typeorm_1.BaseEntity {
    id;
    date;
    titre;
    commentaire;
    numero;
    mois;
    annee;
};
exports.NotePerso = NotePerso;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], NotePerso.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], NotePerso.prototype, "date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], NotePerso.prototype, "titre", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], NotePerso.prototype, "commentaire", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], NotePerso.prototype, "numero", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], NotePerso.prototype, "mois", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], NotePerso.prototype, "annee", void 0);
exports.NotePerso = NotePerso = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], NotePerso);
