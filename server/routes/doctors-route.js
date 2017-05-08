'use strict';

const { Router } = require('express');
const { getAllDoctors, addDoctor }= require('../controllers/doctorCtrl')
const router = Router();

router.get('/doctors', getAllDoctors)
router.post('/doctors/new', addDoctor)

module.exports = router;
