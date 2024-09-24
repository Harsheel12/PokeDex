import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/routes";
dotenv.config();

// Sets our port to the PORT .env value or 4000 by default if .env is not configured
const PORT = process.env.PORT || 4000;

// Creates the express server
const app = express();

// Express middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// Endpoint Routes
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
