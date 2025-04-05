"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const database_1 = require("./config/database");
const data_routes_1 = tslib_1.__importDefault(require("./routes/data.routes"));
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const saisie_routes_1 = tslib_1.__importDefault(require("./routes/saisie.routes"));
console.log('✅ dataRoutes:', data_routes_1.default);
const app = (0, express_1.default)();
const PORT = process.env['PORT'] || 3000;
app.use((0, cors_1.default)({ origin: 'http://localhost:4200' }));
app.use(express_1.default.json());
database_1.AppDataSource.initialize()
    .then(() => {
    console.log('✅ Base de données connectée !');
    app.use('/api', data_routes_1.default); // ✅ Monte les routes après la connexion
    app.use('/api', saisie_routes_1.default); // ✅ Monte les routes après la connexion
    console.log('✅ Middleware chargés:', data_routes_1.default.stack.map((r) => r.name || 'anonymous'));
    app.listen(PORT, () => {
        console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error('❌ Erreur de connexion à la base :', error);
});
