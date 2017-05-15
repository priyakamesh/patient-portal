'use strict';

const { Router } = require('express');
const { getAllDoctors, addDoctor, getDoctor }= require('../controllers/doctorCtrl')
const router = Router();

router.get('/doctors', getAllDoctors)
router.post('/doctors/new', addDoctor)
/**
 * @swagger
 * definition:
 *   GetDoctor:
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
 * /api/v1/doctors/check/{fullname}:
 *   get:
 *     tags:
 *       - Get Doctor
 *     description: Returns a doctor
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Gets a doctor
 *         schema:
 *           $ref: '#/definitions/GetDoctor'
 */
router.get('/doctors/check/:fullname',getDoctor)
module.exports = router;
