import express from "express";
import profileController from "../controllers/profile.controller.mjs";
import authMiddleware from "../middleware/auth.middleware.mjs";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: Profile management endpoints
 */

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User profile retrieved successfully
 *       '500':
 *         description: Internal server error
 */
router.get("/", authMiddleware, profileController.profileData);

export default router;
