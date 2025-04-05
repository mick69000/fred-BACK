"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const agent_model_1 = require("../models/data/agent.model");
const engin_model_1 = require("../models/data/engin.model");
const fiac_model_1 = require("../models/data/fiac.model");
const firex_model_1 = require("../models/data/firex.model");
const module_model_1 = require("../models/data/module.model");
const msurgent_model_1 = require("../models/data/msurgent.model");
const om_model_1 = require("../models/data/om.model");
const specialite_model_1 = require("../models/data/specialite.model");
const systeme_model_1 = require("../models/data/systeme.model");
const voie_model_1 = require("../models/data/voie.model");
const hsup_model_1 = require("../models/saisie/hsup.model");
const agc_model_1 = require("../models/saisie/agc.model");
const ng_model_1 = require("../models/saisie/ng.model");
const r2n_model_1 = require("../models/saisie/r2n.model");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'nsz.db',
    entities: [
        agent_model_1.Agent,
        engin_model_1.Engin,
        fiac_model_1.Fiac,
        firex_model_1.Firex,
        module_model_1.Module,
        msurgent_model_1.Msurgent,
        om_model_1.Om,
        specialite_model_1.Specialite,
        systeme_model_1.Systeme,
        voie_model_1.Voie,
        hsup_model_1.Hsup,
        agc_model_1.Agc,
        ng_model_1.Ng,
        r2n_model_1.R2n,
    ],
    synchronize: true, // Synchronisation des entités avec la base de données (pas recommandé en production)
    logging: true,
});
