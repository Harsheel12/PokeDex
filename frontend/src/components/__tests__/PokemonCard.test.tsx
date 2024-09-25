import React from "react";
import "@testing-library/jest-dom";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PokemonCard from "../PokemonCard";
import { PokemonType } from "../../utils/types";

// Mocked data for a sample Pokémon
const mockPokemon: PokemonType = {
	id: 1,
	name: "bulbasaur",
	type: "grass",
	height: 7,
	weight: 69,
	types: [
		{ slot: 1, type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" } },
		{ slot: 2, type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" } },
	],
	sprites: {
		front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
	},
};

describe("PokemonCard", () => {
	it("should display correct Pokemon stats", () => {
		render(<PokemonCard pokemon={mockPokemon} />);

		expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
		expect(screen.getByText(/number: 1/i)).toBeInTheDocument();
		expect(screen.getByText(/height: 7/i)).toBeInTheDocument();
		expect(screen.getByText(/weight: 69/i)).toBeInTheDocument();
	});

	it("should display the Pokemon image", () => {
		render(<PokemonCard pokemon={mockPokemon} />);

		const imgElement = screen.getByAltText(/bulbasaur/i);
		expect(imgElement).toBeInTheDocument();
		expect(imgElement).toHaveAttribute("src", mockPokemon.sprites.front_default);
	});

	it("should display the correct Pokemon types", () => {
		render(<PokemonCard pokemon={mockPokemon} />);

		expect(screen.getByText(/grass/i)).toBeInTheDocument();
		expect(screen.getByText(/poison/i)).toBeInTheDocument();
	});
});