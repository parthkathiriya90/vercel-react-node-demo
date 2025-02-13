import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import specs from "./utils/swaggerConfig.mjs";
import authRoutes from "./routes/auth.routes.mjs";
import profileRoutes from "./routes/profile.routes.mjs";
import servicesRoutes from "./routes/services.routes.mjs";
import orderRoutes from "./routes/order.routes.mjs";
import cors from "cors";
import "colors";
import connectToDatabase from "./config/db.mjs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Load environment variables
dotenv.config();
connectToDatabase();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Swagger documentation setup
const options = {
  customCss:
    '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
  customSiteTitle: 'My API Documentation',
};

// CDN CSS
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(specs, { customCssUrl: CSS_URL, ...options }));


// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/order", orderRoutes);

// Get the current file's directory name for serving React files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve the React app 
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.blue);
});

