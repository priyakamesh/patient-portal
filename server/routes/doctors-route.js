'use strict';

const { Router } = require('express');
const { getAllDoctors }= require('../controllers/doctorCtrl')
const router = Router();

router.get('/doctors', getAllDoctors)


module.exports = router;
