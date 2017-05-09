'use strict';

const { Router } = require('express');
const { getAllMedications, getAllCurrentMedication, getAllDisMedication, addCurrentMedication,deleteCurrentMedication,deleteDisMedication,addDisMedication}= require('../controllers/medicationCtrl')
const router = Router();

router.get('/patients/:id/medication', getAllMedications)
router.get('/patients/:id/currentmedication', getAllCurrentMedication)
router.get('/patients/:id/dismedication', getAllDisMedication)
router.post('/patients/:id/currentmedication/new', addCurrentMedication)
router.delete('/patients/:id/currentmedication/:currentmedication_id', deleteCurrentMedication)
router.post('/patients/:id/dismedication/new', addDisMedication)
router.delete('/patients/:id/dismedication/:dismedication_id', deleteDisMedication)


module.exports = router;
