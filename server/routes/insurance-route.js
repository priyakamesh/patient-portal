'use strict';

const { Router } = require('express');
const { getAllInsurance, getAllPrimaryInsurance, getAllSecondaryInsurance, addInsurance, getPatientInsurance, deletePatientInsurance}= require('../controllers/insuranceCtrl')
const router = Router();
/**
 * @swagger
 * /api/v1/insurance/{id}:
 *   post:
 *     tags:
 *       - Insurances
 *     description: Creates a new insurance
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: insuarnce
 *         description: Insurance object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Insurance'
 *     responses:
 *       200:
 *         description: Successfully created
 */

router.post('/insurance/:patientId', addInsurance)
/**
 * @swagger
 * definition:
 *   Insurance:
 *     properties:
 *       insuranceprovider:
 *         type: string
 *       groupid:
 *         type: string
 *       subscriberid:
 *         type: integer
 *       insurance_type_id:
 *         type: integer
 *       patient_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/insurance:
 *   get:
 *     tags:
 *       - Insurances
 *     description: Returns all insurances
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of insurances
 *         schema:
 *           $ref: '#/definitions/Insurance'
 */

router.get('/insurance', getAllInsurance)
/**
 * @swagger
 * definition:
 *   Insurance:
 *     properties:
 *       insuranceprovider:
 *         type: string
 *       groupid:
 *         type: string
 *       subscriberid:
 *         type: integer
 *       insurance_type_id:
 *         type: integer
 *       patient_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/primaryinsurance:
 *   get:
 *     tags:
 *       - Insurances
 *     description: Returns all primary insurances
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of insurances
 *         schema:
 *           $ref: '#/definitions/Insurance'
 */
router.get('/primaryinsurance', getAllPrimaryInsurance)
/**
 * @swagger
 * definition:
 *   Insurance:
 *     properties:
 *       insuranceprovider:
 *         type: string
 *       groupid:
 *         type: string
 *       subscriberid:
 *         type: integer
 *       insurance_type_id:
 *         type: integer
 *       patient_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/secondaryinsurance:
 *   get:
 *     tags:
 *       - Insurances
 *     description: Returns all insurances
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of insurances
 *         schema:
 *           $ref: '#/definitions/Insurance'
 */
router.get('/secondaryinsurance', getAllSecondaryInsurance)
/**
 * @swagger
 * definition:
 *   Insurance:
 *     properties:
 *       insuranceprovider:
 *         type: string
 *       groupid:
 *         type: string
 *       subscriberid:
 *         type: integer
 *       insurance_type_id:
 *         type: integer
 *       patient_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/insurance/{id}:
 *   get:
 *     tags:
 *       - Insurances
 *     description: Returns all insurances
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of insurances of a patient
 *         schema:
 *           $ref: '#/definitions/Insurance'
 */
router.get('/insurance/:id', getPatientInsurance)
/**
 * @swagger
 * /api/v1/insurance/{id}:
 *   delete:
 *     tags:
 *       - Insurances
 *     description: Deletes a single Insurance
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: insurance id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/insurance/:id', deletePatientInsurance)


module.exports = router;
