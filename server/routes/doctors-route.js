'use strict';

const { Router } = require('express');
const { getAllDoctors, addDoctor, getDoctor }= require('../controllers/doctorCtrl')
const router = Router();

router.get('/doctors', getAllDoctors)
router.post('/doctors/new', addDoctor)
router.get('/doctors/check/:fullname',getDoctor)
module.exports = router;
