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
/**
 * @swagger
 * definition:
 *   Patient:
 *     properties:
 *       email:
 *         type: string
  *       password:
 *         type: string
 *       firstname:
 *         type: string
 *       lastname:
 *         type: string
 *       dob:
 *         type: string
 *       ethnicity:
 *         type: string
 *       address:
 *         type: string
 *       phonenumber:
 *         type: string

 */

/**
 * @swagger
 * /api/v1/patient/{id}:
 *   get:
 *     tags:
 *       - Patient
 *     description: Returns a single patient
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Patient's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single patient
 *         schema:
 *           $ref: '#/definitions/Patient'
 */

router.get('/patient/:id', getPatient)
/**
 * @swagger
 * /api/v1/patient/new:
 *   post:
 *     tags:
 *       - Patient
 *     description: Creates a new patient
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: patient
 *         description: Patientobject
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Patient'
 *     responses:
 *       200:
 *         description: Successfully created
 */

router.post('/patient/new', addPatient)
router.post('/patient/:id/logout', destroy)
/**
 * @swagger
 * /api/v1/patient/{id}:
 *   delete:
 *     tags:
 *       - Patient
 *     description: Deletes a single patient
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Patient's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/patient/:id', deletePatient)
/**
 * @swagger
 * definition:
 *   Allergy:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       allergy_type_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/patient/{id}/allergy:
 *   get:
 *     tags:
 *       - Patient
 *     description: Returns all patient allergies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of allergy
 *         schema:
 *           $ref: '#/definitions/Allergy'
 */
router.get('/patient/:patient_id/allergy', getAllAllergy)
/**
 * @swagger
 * definition:
 *   History:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       history_type_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/patient/{id}/history:
 *   get:
 *     tags:
 *       - Patient
 *     description: Returns all patient histories
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of history
 *         schema:
 *           $ref: '#/definitions/History'
 */
router.get('/patient/:patient_id/history', getAllHistory)
/**
 * @swagger
 * definition:
 *   Doctor:
 *     properties:
 *       fullname:
 *         type: string
 *       speciality:
 *         type: string
 *       address:
 *         type: string
 *       phonenumber:
 *         type: string
 */
/**
 * @swagger
 * /api/v1/patient/{id}/doctor:
 *   get:
 *     tags:
 *       - Patient
 *     description: Returns all patient doctor
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of doctor
 *         schema:
 *           $ref: '#/definitions/Doctor'
 */
router.get('/patient/:patient_id/doctor', getAllDoctor)
/**
 * @swagger
 * definition:
 *   Patient:
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       firstname:
 *         type: string
 *       lastname:
 *         type: string
 *       dob:
 *         type: string
 *       ethnicity:
 *         type: string
 *       address:
 *         type: string
 *       phonenuber:
 *         type: string

 */
/**
 * @swagger
 * /api/v1/patient/{email}:
 *   get:
 *     tags:
 *       - Patient
 *     description: Returns a patient
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Gets a patient
 *         schema:
 *           $ref: '#/definitions/Patient'
 */
router.get('/patient/:email', getPatientId)
router.patch('/patient/:id', updatePatient)
router.get('/patient/:patient_id/doctor',getId)
/**
 * @swagger
 * /api/v1/addPatientDoctor/{id}/{doctor_id}:
 *   post:
 *     tags:
 *       - Patient
 *     description: Creates a new doctor for patient
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: patient
 *         description: Patient object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Patient'
 *     responses:
 *       200:
 *         description: Successfully created
 */

router.post('/addPatientDoctor/:id/:doctor_id',addPatientDoctor)
/**
 * @swagger
 * /api/deletePatientDoctor/{id}/{doctor_id}:
 *   delete:
 *     tags:
 *       - Patient
 *     description: Deletes a single doctor for a patient
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Patient's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/deletePatientDoctor/:id/:doctor_id',deletePatientDoctor)
/**
 * @swagger
 * /api/v1/patient/{id}/allergy:
 *   post:
 *     tags:
 *       - Patient
 *     description: Creates a collection of allergies for a patient
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: patient
 *         description: Patient object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Patient'
 *     responses:
 *       200:
 *         description: Successfully created
 */

router.post('/patient/:id/allergy',addMany)
/**
 * @swagger
 * /api/v1/patient/{id}/history:
 *   post:
 *     tags:
 *       - Patient
 *     description: Creates a collection of histories for a patient
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: patient
 *         description: Patient object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Patient'
 *     responses:
 *       200:
 *         description: Successfully created
 */

router.post('/patient/:id/history',addManyHistory)
router.post('/patient/logout/:id', logoutPatient)
// router.get('/foodallergy/:patient_id', getFoodAllergy)
// router.get('/drugallergy/:patient_id', getDrugAllergy)
module.exports = router;
