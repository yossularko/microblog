import express, { Request, Response } from "express";
import createError from "http-errors";
import userRoute from "./routes/userRoute";

const app = express();

app.use(express.json());

// user routes
app.use("/user", userRoute);

// handle 404 error
app.use((req: Request, res: Response, next: Function) => {
  next(createError(404));
});

app.listen(3000, () =>
  console.log(`⚡ [server]: Server is running at http://localhost:3000`)
);
