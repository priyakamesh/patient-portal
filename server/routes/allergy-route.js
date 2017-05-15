'use strict';

const { Router } = require('express');
const { getAllAllergy, getAllDrugAllergy, getAllFoodAllergy }= require('../controllers/allergyCtrl')
const router = Router();
/**
 * @swagger
 * definition:
 *   Allergy:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       allergy_type_id:
 *         type: integer
 */
 /**
 * @swagger
 * /api/v1/allergy:
 *   get:
 *     tags:
 *       - Allergies
 *     description: Returns all allergies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of allergies
 *         schema:
 *           $ref: '#/definitions/Allergy'
 */
router.get('/allergy', getAllAllergy)
/**
 * @swagger
 * definition:
 *   DrugAllergy:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       allergy_type_id:
 *         type: integer
 */
 /**
 * @swagger
 * /api/v1/drugallergy:
 *   get:
 *     tags:
 *       - Drug Allergies
 *     description: Returns all drug allergies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of drug allergies
 *         schema:
 *           $ref: '#/definitions/DrugAllergy'
 */
router.get('/drugallergy', getAllDrugAllergy)
/**
 * @swagger
 * definition:
 *   FoodAllergy:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       allergy_type_id:
 *         type: integer
 */
 /**
 * @swagger
 * /api/v1/foodallergy:
 *   get:
 *     tags:
 *       - Food Allergies
 *     description: Returns all food allergies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of food allergies
 *         schema:
 *           $ref: '#/definitions/FoodAllergy'
 */
router.get('/foodallergy', getAllFoodAllergy)

// router.get('/drugallergy/:id', getDrugAllergy)

module.exports = router;
