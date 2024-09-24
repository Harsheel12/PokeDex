import { Request, Response } from "express";

const getPokemonById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send("Error fetching Pokemon data");
  }
};

export { getPokemonById };
