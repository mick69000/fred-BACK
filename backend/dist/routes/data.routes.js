"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const engins_controller_1 = require("../controllers/data/engins.controller");
const voies_controller_1 = require("../controllers/data/voies.controller");
const agents_controller_1 = require("../controllers/data/agents.controller");
const fiacs_controller_1 = require("../controllers/data/fiacs.controller");
const firexs_controller_1 = require("../controllers/data/firexs.controller");
const modules_controller_1 = require("../controllers/data/modules.controller");
const msurgents_controller_1 = require("../controllers/data/msurgents.controller");
const oms_controller_1 = require("../controllers/data/oms.controller");
const specialites_controller_1 = require("../controllers/data/specialites.controller");
const systemes_controller_1 = require("../controllers/data/systemes.controller");
const router = (0, express_1.Router)();
const enginController = new engins_controller_1.EnginsController();
const voieController = new voies_controller_1.VoiesController();
const agentController = new agents_controller_1.AgentsController();
const fiacController = new fiacs_controller_1.FiacsController();
const firexController = new firexs_controller_1.FirexsController();
const moduleController = new modules_controller_1.ModulesController();
const msurgentController = new msurgents_controller_1.MsurgentsController();
const omController = new oms_controller_1.OmsController();
const specialiteController = new specialites_controller_1.SpecialitesController();
const systemeController = new systemes_controller_1.SystemesController();
router.get('/agents', agentController.getAllAgents);
router.post('/agents', agentController.addAgent);
router.delete('/agents/:nom/:prenom', agentController.deleteAgent);
router.get('/engins', enginController.getAllEngins);
router.post('/engins', enginController.addEngin);
router.delete('/engins/:numero', enginController.deleteEngin);
router.get('/fiacs', fiacController.getAllFiacs);
router.post('/fiacs', fiacController.addFiac);
router.delete('/fiacs/:numero', fiacController.deleteFiac);
router.get('/firexs', firexController.getAllFirexs);
router.post('/firexs', firexController.addFirex);
router.delete('/firexs/:numero', firexController.deleteFirex);
router.get('/modules', moduleController.getAllModules);
router.post('/modules', moduleController.addModule);
router.delete('/modules/:numero', moduleController.deleteModule);
router.get('/msurgents', msurgentController.getAllMsurgents);
router.post('/msurgents', msurgentController.addMsurgent);
router.delete('/msurgents/:numero', msurgentController.deleteMsurgent);
router.get('/oms', omController.getAllOms);
router.post('/oms', omController.addOm);
router.delete('/oms/:numero', omController.deleteOm);
router.get('/specialites', specialiteController.getAllSpecialites);
router.post('/specialites', specialiteController.addSpecialite);
router.delete('/specialites/:nom', specialiteController.deleteSpecialite);
router.get('/systemes', systemeController.getAllSystemes);
router.post('/systemes', systemeController.addSysteme);
router.delete('/systemes/:nom', systemeController.deleteSysteme);
router.get('/voies', voieController.getAllVoies);
router.post('/voies', voieController.addVoie);
router.delete('/voies/:numero', voieController.deleteVoie);
exports.default = router;
