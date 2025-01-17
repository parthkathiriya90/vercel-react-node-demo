import express from "express";
import authController from "../controllers/auth.controller.mjs";
import authMiddleware from "../middleware/auth.middleware.mjs";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "parth@sourcenettechnology.in"  
 *               password:
 *                 type: string
 *                 example: 'Parth@123'
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '400':
 *         description: Bad request
 *       '409':
 *         description: Email address is already registered
 *       '500':
 *         description: Internal server error
 */
router.post("/register", authController.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Authentication]
 *     description: Logs in a user with email and password and returns an access token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "parth@sourcenettechnology.in"  
 *               password:
 *                 type: string
 *                 example: 'Parth@123'
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *       '401':
 *         description: Invalid credentials
 *       '404':
 *         description: User not found
 *       '409':
 *         description: User not verified
 *       '500':
 *         description: Internal server error
 */
router.post("/login", authController.login);

/**
 * @swagger
 * /api/auth/logout:
 *   get:
 *     summary: Log out a user
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User logged out successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.get("/logout", authMiddleware, authController.logout);

// /**
//  * @swagger
//  * /api/auth/verify-email/{code}:
//  *   get:
//  *     summary: Verify user's email address
//  *     tags: [Authentication]
//  *     parameters:
//  *       - in: path
//  *         name: code
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: Verification code sent to the user's email
//  *     responses:
//  *       '200':
//  *         description: Email address successfully verified
//  *       '404':
//  *         description: User not found
//  *       '500':
//  *         description: Internal server error
//  */
// router.get("/verify-email/:code", authController.verifyEmail);

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Forgot password 
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "parth@sourcenettechnology.in" 
 *     responses:
 *       '200':
 *         description: OTP sent successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post("/forgot-password", authController.forgotPassword);

/**
 * @swagger
 * /api/auth/verify-otp:
 *   post:
 *     summary: OTP verify 
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "parth@sourcenettechnology.in" 
 *               otp:
 *                 type: string
 *                 example: "0000" 
 *     responses:
 *       '200':
 *         description: Successfully verify your otp
 *       '409':
 *         description: Your OTP is can't match! || OTP expired!
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post("/verify-otp", authController.verifyOTP);

/**
 * @swagger
 * /api/auth/resend:
 *   post:
 *     summary: Resend OTP 
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "parth@sourcenettechnology.in"
 *     responses:
 *       '200':
 *         description: Successfully resent your otp
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post("/resend", authController.resendOTP);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Reset password 
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "parth@sourcenettechnology.in"  
 *               password:
 *                 type: string
 *                 example: "Parth@123" 
 *     responses:
 *       '200':
 *         description: Your password was successfully updated
 *       '409':
 *         description: Your OTP is can't verified!
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post("/reset-password", authController.resetPassword);

/**
 * @swagger
 * /api/auth/change-password:
 *   post:
 *     summary: Change password 
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 example: "Parth@123" 
 *               password:
 *                 type: string
 *                 example: "Parth@1234" 
 *     responses:
 *       '200':
 *         description: Successfully change your password
 *       '401':
 *         description: Your old password is wrong!
 *       '409':
 *         description: Your old password and new password cannot be the same!
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post("/change-password", authController.changePassword);

export default router;
