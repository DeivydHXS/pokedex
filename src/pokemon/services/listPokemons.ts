import axios from "axios";

export interface PokemonItemInterface {
    name: string;
    url: string;
}

interface PokemonlistInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonItemInterface[];
}

export async function listPokemons(): Promise<PokemonlistInterface> {
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;

    const response = await axios.get<PokemonlistInterface>(endpoint); // Usando generics na função get.

    return response.data;
};