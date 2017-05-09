'use strict';

const { Router } = require('express');
const { getAllInsurance, getAllPrimaryInsurance, getAllSecondaryInsurance}= require('../controllers/insuranceCtrl')
const router = Router();

router.get('/insurance', getAllInsurance)
router.get('/primaryinsurance', getAllPrimaryInsurance)
router.get('/secondaryinsurance', getAllSecondaryInsurance)


module.exports = router;
