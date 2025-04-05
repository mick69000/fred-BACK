import { Router } from 'express';
import { HsupastController } from '../controllers/saisie/hsupast.Controller';
import { AgcController } from '../controllers/saisie/agc.Controller';
import { NgController } from '../controllers/saisie/ng.Controller';
import { R2Controller } from '../controllers/saisie/r2n.Controller';

const router = Router();
const hsupController = new HsupastController();
const agcController = new AgcController();
const ngController = new NgController();
const r2nController = new R2Controller();

router.get('/hsupast', hsupController.getAllHsup);
router.get('/hsupast/:journee', hsupController.getADayHsup);
router.post('/hsupast', hsupController.addHsup);
router.delete('/hsupast/:journee', hsupController.deleteHsup);

router.get('/agc', agcController.getAllAgc);
router.get('/agc/:journee', agcController.getADayAgc);
router.post('/agc', agcController.addAgc);
router.delete('/agc/:journee', agcController.deleteAgc);

router.get('/ng', ngController.getAllNg);
router.get('/ng/:journee', ngController.getADayNg);
router.post('/ng', ngController.addNg);
router.delete('/ng/:journee', ngController.deleteNg);

router.get('/r2n', r2nController.getAllR2n);
router.get('/r2n/:journee', r2nController.getADayR2n);
router.post('/r2n', r2nController.addR2n);
router.delete('/r2n/:journee', r2nController.deleteR2n);

export default router;
