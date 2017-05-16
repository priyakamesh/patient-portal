'use strict';

const { Router } = require('express');
const router = Router();
router.use(require('./patient-route'))
router.use(require('./doctors-route'))
router.use(require('./allergy-route'))
router.use(require('./history-route'))
router.use(require('./insurance-route'))
router.use(require('./release_med_info-route'))
router.use(require('./medication-route'))
router.get('/',function (req,res) {
  res.json ({
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
 * /api/v1/doctors:
 *   get:
 *     tags:
 *       - Doctors
 *     description: Returns all doctors
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of doctors
 *         schema:
 *           $ref: '#/definitions/Doctor'
 */
    "list of doctors": "https://patient-portal-api.herokuapp.com/api/v1/doctors",
/**
 * @swagger
 * /api/v1/doctors/new:
 *   post:
 *     tags:
 *       - Doctors
 *     description: Creates a new doctor
 *     produces:
 *       - application/json
 *     parameters:
 *       - fullname: doctor
 *         description: Doctor object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Doctor'
 *     responses:
 *       200:
 *         description: Successfully created
 */
    "addDoctor": "https://patient-portal-api.herokuapp.com/api/v1/doctors/new",
    "patient_doctor": "https://patient-portal-api.herokuapp.com/api/v1/patient/:id/doctor",
    "allergy" : "https://patient-portal-api.herokuapp.com/api/v1/allergy",
    "list_food_allergy" : "https://patient-portal-api.herokuapp.com/api/v1/foodallergy",
    "list_drug_allergy" : "https://patient-portal-api.herokuapp.com/api/v1/drugallergy",
    "all allergy for a patient" : "https://patient-portal-api.herokuapp.com/api/v1/patient/:patient_id/allergy",
    "history" : "https://patient-portal-api.herokuapp.com/api/v1/patients/:id/history",
    "list of social_history" : "https://patient-portal-api.herokuapp.com/api/v1/socialhistory",
    "list of family_history" : "https://patient-portal-api.herokuapp.com/api/v1/familyhistory",
    "all history for a patient" : "https://patient-portal-api.herokuapp.com/api/v1/patient/:patient_id/history",
    "patient": "https://patient-portal-api.herokuapp.com/api/v1/patient/<id>",
    "get patient id": "https://patient-portal-api.herokuapp.com/api/v11/patient/:email",
    "add details to patient": "https://patient-portal-api.herokuapp.com/api/v1/patient/:id",
    "addPatient": "https://patient-portal-api.herokuapp.com/api/v1/patient/new",
    "insurance":"https://patient-portal-api.herokuapp.com/api/v1/patients/:id/insurance",
    "get patient insurance": "https://patient-portal-api.herokuapp.com/api/v1/insurance/:id",
    "primary_insurance": "https://patient-portal-api.herokuapp.com/api/v1/patients/:id/primaryinsurance",
    "secondary_insurance": "https://patient-portal-api.herokuapp.com/api/v1/patients/:id/secondaryinsurance",
    "release_med_info": "https://patient-portal-api.herokuapp.com/api/v1/patient/:id/release_med_info",
    "all medications": "https://patient-portal-api.herokuapp.com/api/v1/patients/:id/medication",
    "all current medications": "https://patient-portal-api.herokuapp.com/api/v1/patients/:id/currentmedication",
    "all discontinued medications": "https://patient-portal-api.herokuapp.com/api/v1/patients/:id/dismedication",
    "add current medication": "https://patient-portal-api.herokuapp.com/api/v1/patients/:id/currentmedication/new",
    "delete current medication": "https://patient-portal-api.herokuapp.com/api/v1/patients/:id/currentmedication/:currentmedication_id",
    "add discontinued medication": "https://patient-portal-api.herokuapp.com/api/v1/patients/:id/dismedication/new",
    "delete discontinued medication": "https://patient-portal-api.herokuapp.com/api/v1/patients/:id/dismedication/:dismedication_id"

  })
})

module.exports = router
