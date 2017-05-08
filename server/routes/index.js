'use strict';

const { Router } = require('express');
const router = Router();
router.use(require('./doctors-route'))
router.get('/',function (req,res) {
  res.json ({
    "doctors": "http://localhost:3000/api/v1/doctors",
    "allergy" : "http://localhost:3000/api/v1/allergy",
    "social_history" : "http://localhost:3000/api/v1/history?history=1",
    "family_history" : "http://localhost:3000/api/v1/history?history=2",

  })
})

module.exports = router
