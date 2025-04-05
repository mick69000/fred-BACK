import { Router } from 'express';
import { EnginsController } from '../controllers/data/engins.controller';
import { VoiesController } from '../controllers/data/voies.controller';
import { AgentsController } from '../controllers/data/agents.controller';
import { FiacsController } from '../controllers/data/fiacs.controller';
import { FirexsController } from '../controllers/data/firexs.controller';
import { ModulesController } from '../controllers/data/modules.controller';
import { MsurgentsController } from '../controllers/data/msurgents.controller';
import { OmsController } from '../controllers/data/oms.controller';
import { SpecialitesController } from '../controllers/data/specialites.controller';
import { SystemesController } from '../controllers/data/systemes.controller';

const router = Router();
const enginController = new EnginsController();
const voieController = new VoiesController();
const agentController = new AgentsController();
const fiacController = new FiacsController();
const firexController = new FirexsController();
const moduleController = new ModulesController();
const msurgentController = new MsurgentsController();
const omController = new OmsController();
const specialiteController = new SpecialitesController();
const systemeController = new SystemesController();

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

export default router;
