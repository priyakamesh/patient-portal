'use strict';

const { Router } = require('express');
const { getAllMedications, getAllCurrentMedication, getAllDisMedication, addCurrentMedication,deleteCurrentMedication,deleteDisMedication,addDisMedication}= require('../controllers/medicationCtrl')
const router = Router();
/**
 * @swagger
 * definition:
 *   Medication:
 *     properties:
 *       brandname:
 *         type: string
 *       drugname:
 *         type: string
 *       dosage:
 *         type: string
 *       route:
 *         type: string
 *       medication_type_id:
 *         type: integer
 *       patient_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/patients/{id}/medication:
 *   get:
 *     tags:
 *       - Medication
 *     description: Returns all medications of a patient
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of medications
 *         schema:
 *           $ref: '#/definitions/Medication'
 */
router.get('/patients/:id/medication', getAllMedications)
/**
 * @swagger
 * definition:
 *   CurrentMedication:
 *     properties:
 *       brandname:
 *         type: string
 *       drugname:
 *         type: string
 *       dosage:
 *         type: string
 *       route:
 *         type: string
 *       medication_type_id:
 *         type: integer
 *       patient_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/patients/{id}/currentmedication:
 *   get:
 *     tags:
 *       - Medication
 *     description: Returns current medications of a patient
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of current medications
 *         schema:
 *           $ref: '#/definitions/CurrentMedication'
 */
router.get('/patients/:id/currentmedication', getAllCurrentMedication)
/**
 * @swagger
 * definition:
 *   DiscontinuedMedication:
 *     properties:
 *       brandname:
 *         type: string
 *       drugname:
 *         type: string
 *       dosage:
 *         type: string
 *       route:
 *         type: string
 *       medication_type_id:
 *         type: integer
 *       patient_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/patients/{id}/currentmedication:
 *   get:
 *     tags:
 *       - Medication
 *     description: Returns discontinued medications of a patient
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of discontinued medications
 *         schema:
 *           $ref: '#/definitions/DiscontinuedMedication'
 */
router.get('/patients/:id/dismedication', getAllDisMedication)
/**
 * @swagger
 * /api/v1/patients/{id}/currentmedication/new:
 *   post:
 *     tags:
 *       - Medication
 *     description: Creates a new current medication
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Patient object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Medication'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/patients/:id/currentmedication/new', addCurrentMedication)
/**
 * @swagger
 * /api/v1/patients/{id}/currentmedication/{currentmedication_id}:
 *   delete:
 *     tags:
 *       - Medication
 *     description: Deletes a single current medication
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
router.delete('/patients/:id/currentmedication/:currentmedication_id', deleteCurrentMedication)
/**
 * @swagger
 * /api/v1/patients/{id}/dismedication/new:
 *   post:
 *     tags:
 *       - Medication
 *     description: Creates a new Discontinued medication
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Patient object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Medication'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/patients/:id/dismedication/new', addDisMedication)
/**
 * @swagger
 * /api/v1/patients/{id}/dismedication/{dismedication_id}:
 *   delete:
 *     tags:
 *       - Medication
 *     description: Deletes a single discontinued medication
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
router.delete('/patients/:id/dismedication/:dismedication_id', deleteDisMedication)


module.exports = router;
