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
    "list of doctors": "http://localhost:3000/api/v1/doctors",
    "addDoctor": "http://localhost:3000/api/v1/doctors/new",
    "patient_doctor": "http://localhost:3000/api/v1/patient/:id/doctor",
    "allergy" : "http://localhost:3000/api/v1/allergy",
    "list_food_allergy" : "http://localhost:3000/api/v1/foodallergy",
    "list_drug_allergy" : "http://localhost:3000/api/v1/drugallergy",
    "all allergy for a patient" : "http://localhost:3000/api/v1/patient/:patient_id/allergy",
    "history" : "http://localhost:3000/api/v1/patients/:id/history",
    "list of social_history" : "http://localhost:3000/api/v1/socialhistory",
    "list of family_history" : "http://localhost:3000/api/v1/familyhistory",
    "all history for a patient" : "http://localhost:3000/api/v1/patient/:patient_id/history",
    "patient": "http://localhost:3000/api/v1/patient/<id>",
    "get patient id": "http://localhost:3000/api/v1/patient/:email",
    "add details to patient": "http://localhost:3000/api/v1/patient/:id",
    "addPatient": "http://localhost:3000/api/v1/patient/new",
    "insurance":"http://localhost:3000/api/v1/patients/:id/insurance",
    "get patient insurance": "http://localhost:3000/api/v1/insurance/:id",
    "primary_insurance": "http://localhost:3000/api/v1/patients/:id/primaryinsurance",
    "secondary_insurance": "http://localhost:3000/api/v1/patients/:id/secondaryinsurance",
    "release_med_info": "http://localhost:3000/api/v1/patient/:id/release_med_info",
    "all medications": "http://localhost:3000/api/v1/patients/:id/medication",
    "all current medications": "http://localhost:3000/api/v1/patients/:id/currentmedication",
    "all discontinued medications": "http://localhost:3000/api/v1/patients/:id/dismedication",
    "add current medication": "http://localhost:3000/api/v1/patients/:id/currentmedication/new",
    "delete current medication": "http://localhost:3000/api/v1/patients/:id/currentmedication/:currentmedication_id",
    "add discontinued medication": "http://localhost:3000/api/v1/patients/:id/dismedication/new",
    "delete discontinued medication": "http://localhost:3000/api/v1/patients/:id/dismedication/:dismedication_id"

  })
})

module.exports = router
