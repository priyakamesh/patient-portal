'use strict';

const { Router } = require('express');
const { getAllInsurance, getAllPrimaryInsurance, getAllSecondaryInsurance, addInsurance, getPatientInsurance}= require('../controllers/insuranceCtrl')
const router = Router();

router.post('/insurance/:patientId', addInsurance)
router.get('/insurance', getAllInsurance)
router.get('/primaryinsurance', getAllPrimaryInsurance)
router.get('/secondaryinsurance', getAllSecondaryInsurance)
router.get('/insurance/:id', getPatientInsurance)


module.exports = router;
