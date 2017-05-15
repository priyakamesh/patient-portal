'use strict';

const { Router } = require('express');
const { getReleaseperson, addReleasePerson, deleteReleasePerson}= require('../controllers/release_med_infoCtrl')
const router = Router();

/**
 * @swagger
 * definition:
 *   Patient:
 *     properties:
 *       fullname:
 *         type: string
 *       relation:
 *         type: string
 *       phonenumber:
 *         type: string
 */
 /**
 * @swagger
 * /api/v1/patient/{id}/release_med_info:
 *   get:
 *     tags:
 *       - Patient
 *     description: Returns all release person for patient
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of release persons
 *         schema:
 *           $ref: '#/definitions/Patient'
 */
router.get('/patient/:id/release_med_info', getReleaseperson)
/**
 * @swagger
 * /api/v1/patient/{id}/release_med_info/new:
 *   post:
 *     tags:
 *       - Patient
 *     description: Creates a new release person for a patient
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
router.post('/patient/:id/release_med_info/new', addReleasePerson)
/**
 * @swagger
 * /api/v1/release_med_info/{id}:
 *   delete:
 *     tags:
 *       - Patient
 *     description: Deletes a single release person
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
router.delete('/release_med_info/:id', deleteReleasePerson)


module.exports = router;
