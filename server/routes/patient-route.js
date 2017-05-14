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
updatePatient,
addMany,
addManyHistory,
logoutPatient}= require('../controllers/patientCtrl')

const { getId, addPatientDoctor, deletePatientDoctor } = require('../controllers/patient_doctorCtrl')
// const { getFoodAllergy, getDrugAllergy } = require('../controllers/patient_allergyCtrl')
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
router.delete('/deletePatientDoctor/:id/:doctor_id',deletePatientDoctor)
router.post('/patient/:id/allergy',addMany)
router.post('/patient/:id/history',addManyHistory)
router.post('/patient/logout/:id', logoutPatient)
// router.get('/foodallergy/:patient_id', getFoodAllergy)
// router.get('/drugallergy/:patient_id', getDrugAllergy)
module.exports = router;
