'use strict';

const { Router } = require('express');
const { getAllAllergy, getAllDrugAllergy, getAllFoodAllergy }= require('../controllers/allergyCtrl')
const router = Router();

router.get('/allergy', getAllAllergy)
router.get('/drugallergy', getAllDrugAllergy)
router.get('/foodallergy', getAllFoodAllergy)

// router.get('/drugallergy/:id', getDrugAllergy)

module.exports = router;
