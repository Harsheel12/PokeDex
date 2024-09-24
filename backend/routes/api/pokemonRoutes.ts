import { Router } from "express";
import { getPokemonById } from "../../controllers/PokemonController";

const pokemonRoutes = Router();

pokemonRoutes.get("/:id", getPokemonById);

export default pokemonRoutes;
