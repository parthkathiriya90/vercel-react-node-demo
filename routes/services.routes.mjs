import express from "express";
import servicesController from "../controllers/services.controller.mjs";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: Services management endpoints
 */

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Get Services
 *     tags: [Services]
 *     responses:
 *       '200':
 *         description: Services retrieved successfully
 *       '404':
 *         description: Services not found!
 *       '500':
 *         description: Internal server error
 */
router.get("/", servicesController.servicesData);

/**
 * @swagger
 * /api/services/{slug}:
 *   get:
 *     summary: Get Services By Slug
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         description: The slug of the service to retrieve
 *         schema:
 *           type: string
 *           example: "buy-instagram-followers"  
 *     responses:
 *       '200':
 *         description: Service details retrieved successfully
 *       '404':
 *         description: Service details not found!
 *       '500':
 *         description: Internal server error
 */
router.get("/:slug", servicesController.servicesBySlug);

export default router;
