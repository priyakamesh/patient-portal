'use strict';

const { Router } = require('express');
const { getAllHistory , getAllSocialHistory, getAllFamilyHistory}= require('../controllers/historyCtrl')
const router = Router();
/**
 * @swagger
 * definition:
 *   History:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       history_type_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/history:
 *   get:
 *     tags:
 *       - History
 *     description: Returns all histories
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of histories
 *         schema:
 *           $ref: '#/definitions/History'
 */
router.get('/history', getAllHistory)
/**
 * @swagger
 * definition:
 *   SocialHistory:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       history_type_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/socialhistory:
 *   get:
 *     tags:
 *       - History
 *     description: Returns all social histories
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of social histories
 *         schema:
 *           $ref: '#/definitions/SocialHistory'
 */
router.get('/socialhistory', getAllSocialHistory)
/**
 * @swagger
 * definition:
 *   FamilyHistory:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       history_type_id:
 *         type: integer
 */
/**
 * @swagger
 * /api/v1/familyhistory:
 *   get:
 *     tags:
 *       - History
 *     description: Returns all family histories
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of family histories
 *         schema:
 *           $ref: '#/definitions/FamilyHistory'
 */
router.get('/familyhistory', getAllFamilyHistory)
module.exports = router;
