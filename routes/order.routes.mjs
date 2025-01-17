import express from "express";
import servicesController from "../controllers/services.controller.mjs";
import orderController from "../controllers/order.controller.mjs";
import authMiddleware from "../middleware/auth.middleware.mjs";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Orders management endpoints
 */

/**
 * @swagger
 * /api/order:
 *   get:
 *     summary: Get Orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Order retrieved successfully
 *       '404':
 *         description: Order not found!
 *       '500':
 *         description: Internal server error
 */
router.get("/", authMiddleware, orderController.getOrderList);

/**
 * @swagger
 * /api/order/update-status:
 *   patch:
 *     summary: Get Orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Order retrieved successfully
 *       '404':
 *         description: Order not found!
 *       '500':
 *         description: Internal server error
 */
router.patch("/update-status", authMiddleware, orderController.updateOrderStatus);

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Generate Orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               slug:
 *                 type: string
 *                 example: "buy-instagram-followers"  
 *               serviceId:
 *                 type: string
 *                 example: "585"  
 *               qty:
 *                 type: string
 *                 example: '250' 
 *               type:
 *                 type: string
 *                 example: 'Standard' 
 *     responses:
 *       '200':
 *         description: Order successfully generated
 *       '404':
 *         description: Service not found!
 *       '500':
 *         description: Internal server error
 */
router.post("/", authMiddleware, orderController.generateOrder);

/**
 * @swagger
 * /api/order/form-detail:
 *   post:
 *     summary: Get order form details By Slug
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               slug:
 *                 type: string
 *                 example: "buy-instagram-followers"  
 *               qty:
 *                 type: string
 *                 example: '100' 
 *               type:
 *                 type: string
 *                 example: 'Standard'  
 *     responses:
 *       '200':
 *         description: Service details retrieved successfully
 *       '404':
 *         description: Service details not found!
 *       '500':
 *         description: Internal server error
 */
router.post("/form-detail", orderController.orderFormDetail);

export default router;
