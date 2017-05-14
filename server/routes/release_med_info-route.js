'use strict';

const { Router } = require('express');
const { getReleaseperson, addReleasePerson, deleteReleasePerson}= require('../controllers/release_med_infoCtrl')
const router = Router();

router.get('/patient/:id/release_med_info', getReleaseperson)
router.post('/patient/:id/release_med_info/new', addReleasePerson)
router.delete('/release_med_info/:id', deleteReleasePerson)


module.exports = router;
