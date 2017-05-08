'use strict';

const { Router } = require('express');
const { getPatient, addPatient, deletePatient}= require('../controllers/patientCtrl')
const router = Router();

router.get('/patient/:id', getPatient)
router.post('/patient/new', addPatient)
router.delete('/patient/:id', deletePatient)


module.exports = router;
