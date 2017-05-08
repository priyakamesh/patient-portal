'use strict';

const { Router } = require('express');
const router = Router();
router.use(require('./doctors-route'))
router.use(require('./allergy-route'))
router.use(require('./history-route'))
router.use(require('./patient-route'))
router.use(require('./insurance-route'))
router.use(require('./irelease_med_info-route'))
router.get('/',function (req,res) {
  res.json ({
    "doctors": "http://localhost:3000/api/v1/doctors",
    "addDoctor": "http://localhost:3000/api/v1/doctors/new",
    "allergy" : "http://localhost:3000/api/v1/allergy",
    "food_allergy" : "http://localhost:3000/api/v1/foodallergy",
    "drug_allergy" : "http://localhost:3000/api/v1/drugallergy",
    "history" : "http://localhost:3000/api/v1/history",
    "social_history" : "http://localhost:3000/api/v1/socialhistory",
    "family_history" : "http://localhost:3000/api/v1/familyhistory",
    "patient": "http://localhost:3000/api/v1/patient/<id>",
    "addPatient": "http://localhost:3000/api/v1/patient/new",
    "insurance":"http://localhost:3000/api/v1/insurance",
    "primary_insurance": "http://localhost:3000/api/v1/primaryinsurance",
    "secondary_insurance": "http://localhost:3000/api/v1/secondaryinsurance"
  })
})

module.exports = router
