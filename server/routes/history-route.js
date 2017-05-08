'use strict';

const { Router } = require('express');
const { getAllHistory , getAllSocialHistory, getAllFamilyHistory}= require('../controllers/historyCtrl')
const router = Router();

router.get('/history', getAllHistory)
router.get('/socialhistory', getAllSocialHistory)
router.get('/familyhistory', getAllFamilyHistory)
module.exports = router;
