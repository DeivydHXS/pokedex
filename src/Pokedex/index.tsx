import React, { useEffect, useState } from 'react';
import { getPokemonDetails } from '../pokemon/services/getPokemon';
import { listPokemons, PokemonItemInterface } from '../pokemon/services/listPokemons';

interface PokedexProps {
    
}

// async function getPokemonDetails(pokemon: PokemonListInterface) {

// };


const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonItemInterface[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonItemInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<any | undefined>(undefined);

    useEffect(() => {
        listPokemons().then((response) => {
            setPokemons(response.results);
        });
    }, []);

    useEffect(() => {
        if (!selectedPokemon) return;

        getPokemonDetails(selectedPokemon.name).then((response) => {
            setSelectedPokemonDetails(response);
        });
    }, [selectedPokemon]);

    return (
        <div>
            <h2>Pokedex</h2>

            {pokemons.map(pokemon => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)}
            
            <h3>Pokemon selecionado: {selectedPokemon?.name || 'Nenhum pokemon selecionado.'}</h3>
            {JSON.stringify(selectedPokemonDetails, undefined, 2)}
        </div>
    );
};

export default Pokedex;