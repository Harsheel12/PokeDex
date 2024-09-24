import express from "express";
import pokemonRoutes from "./api/pokemonRoutes";

const router = express.Router();

router.use("/api/pokemon", pokemonRoutes);

export default router;
