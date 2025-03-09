"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sqlite3_1 = __importDefault(require("sqlite3"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const db = new sqlite3_1.default.Database(path_1.default.join(__dirname, 'nsz.db'));
// Créer les tables si elles n'existent pas
db.serialize(() => {
    // tables pour les engins avec différents parametres
    db.run('CREATE TABLE IF NOT EXISTS engins (id INTEGER PRIMARY KEY, type TEXT, numero TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS voies (id INTEGER PRIMARY KEY, numero TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS modules (id INTEGER PRIMARY KEY, type TEXT, numero TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS fiacs (id INTEGER PRIMARY KEY, type TEXT, numero TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS oms (id INTEGER PRIMARY KEY, type TEXT, numero TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS firex (id INTEGER PRIMARY KEY, type TEXT, numero TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS ms_urgence (id INTEGER PRIMARY KEY, type TEXT, numero TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS agents (id INTEGER PRIMARY KEY, nom TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS specialites (id INTEGER PRIMARY KEY, nom TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS systemes (id INTEGER PRIMARY KEY, nom TEXT)');
    // table Heures sup et heures d'astreinte
    db.run('CREATE TABLE IF NOT EXISTS hsupastreinte (id INTEGER PRIMARY KEY, date_debut TEXT, DATEFIN TEXT, HEUREDEBUT TEXT, HEUREFIN TEXT, NATURE TEXT, COMMENTAIRE TEXT, DUREE TEXT)');
});
// Route pour obtenir tous les utilisateurs
app.get('/api/hsupastreinte', (req, res) => {
    db.all('SELECT * FROM hsupastreinte', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ hsupastreinte: rows });
    });
});
// Route pour obtenir les engins
app.get('/api/engins', (req, res) => {
    db.all('SELECT * FROM engins', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ engins: rows });
    });
});
// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
