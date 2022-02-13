import axios from "axios";
import { PokemonDetails } from "../interfaces/pokemonDetails";

export async function getPokemonDetails(name: string): Promise<PokemonDetails> {
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon/${name}`;

    const response = await axios.get<PokemonDetails>(endpoint);

    return response.data;
};