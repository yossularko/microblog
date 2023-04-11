import express, { Request, Response } from "express";
import createError from "http-errors";
import swaggerJsdoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import feedRoute from "./routes/feedRoute";
import userRoute from "./routes/userRoute";

const app = express();

app.use(express.json());

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Micro Blog API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Yos Sularko",
        url: "https://muhammad-yos-sularko.vercel.app",
        email: "yossularko@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// post routes
app.use("/feed", feedRoute);

// user routes
app.use("/user", userRoute);

// handle 404 error
app.use((req: Request, res: Response, next: Function) => {
  next(createError(404));
});

app.listen(3000, () =>
  console.log(`⚡ [server]: Server is running at http://localhost:3000`)
);
