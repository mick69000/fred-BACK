"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hsup = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Hsup = class Hsup extends typeorm_1.BaseEntity {
    id;
    dateDebut;
    heureDebut;
    anneeDebut;
    moisDebut;
    dateFin;
    heureFin;
    astreinte;
    hsup;
    cadeau;
    commentaire;
    heureSaisie;
    heureDuMois;
    heureDeLAnnee;
};
exports.Hsup = Hsup;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Hsup.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Hsup.prototype, "dateDebut", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Hsup.prototype, "heureDebut", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Hsup.prototype, "anneeDebut", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Hsup.prototype, "moisDebut", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Hsup.prototype, "dateFin", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Hsup.prototype, "heureFin", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Hsup.prototype, "astreinte", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Hsup.prototype, "hsup", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Hsup.prototype, "cadeau", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Hsup.prototype, "commentaire", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Hsup.prototype, "heureSaisie", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Hsup.prototype, "heureDuMois", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Hsup.prototype, "heureDeLAnnee", void 0);
exports.Hsup = Hsup = tslib_1.__decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['dateDebut'])
], Hsup);
