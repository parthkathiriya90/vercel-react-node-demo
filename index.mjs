import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.mjs";
import userRoutes from "./routes/user.routes.mjs";
import profileRoutes from "./routes/profile.routes.mjs";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import specs from "./utils/swaggerConfig.mjs";
import "colors";
import connectToDatabase from "./config/db.mjs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Load environment variables
dotenv.config();
connectToDatabase();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());


// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);

// Swagger documentation setup
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(specs));

// Get the current file's directory name for serving React files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve the React app
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.blue);
});

// const express = require('express');
// const path = require('path');
// const axios = require('axios');

// const app = express();

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, '../frontend/dist')));

// // Handle requests by serving index.html for all routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
// });

// // API endpoint
// app.use('/api/products', async (req, res) => {
//   const response = await axios.get('https://fakestoreapi.com/products');
//   res.send(response.data);
// });

// // Start the server
// app.listen(process.env.PORT, () => {
//   console.log('Server is running on port ' + process.env.PORT);
// });