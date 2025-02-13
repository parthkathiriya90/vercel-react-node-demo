import swaggerJsdoc from "swagger-jsdoc";

let PORT = process.env.PORT || 3001;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Famoid",
      version: "1.0.0",
      description: "API documentation for Famoid",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.mjs"],
};

const specs = swaggerJsdoc(options);
export default specs;
