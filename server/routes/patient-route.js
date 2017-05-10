'use strict';

const { Router } = require('express');
const { getPatient,
  addPatient,
  deletePatient,
  getAllAllergy,
  getAllHistory,
  getAllDoctor,
  checkPatient,
  destroy,
  getPatientId,
updatePatient}= require('../controllers/patientCtrl')

const { getId, addPatientDoctor } = require('../controllers/patient_doctorCtrl')
const router = Router();

router.post('/patient/check', checkPatient)
router.get('/patient/:id', getPatient)
router.post('/patient/new', addPatient)
router.post('/patient/:id/logout', destroy)
router.delete('/patient/:id', deletePatient)
router.get('/patient/:patient_id/allergy', getAllAllergy)
router.get('/patient/:patient_id/history', getAllHistory)
router.get('/patient/:patient_id/doctor', getAllDoctor)
router.get('/patient/:email', getPatientId)
router.patch('/patient/:id', updatePatient)
router.get('/patient/:patient_id/doctor',getId)
router.post('/addPatientDoctor/:id/:doctor_id',addPatientDoctor)
module.exports = router;
