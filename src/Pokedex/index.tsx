import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getPokemonDetails } from '../pokemon/services/getPokemon';
import { listPokemons, PokemonItemInterface } from '../pokemon/services/listPokemons';
import { PokemonDetails } from '../pokemon/interfaces/pokemonDetails';
import { PokemonDialog } from '../pokemon/components/PokemonDialog';
import PokemonGrid from '../pokemon/components/PokemonGrid';

interface PokedexProps {
    
}

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonItemInterface[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonItemInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetails>({
        abilities: [],
        base_experience: 1,
        forms: [],
        game_indices: [],
        height: 1,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters: '',
        moves: [],
        name: '',
        order: 1,
        past_types: [],
        species: { name: 'sad', url: 'asf' },
        sprites: { 
            back_default:       'string',
            back_female:        null,
            back_shiny:         'string',
            back_shiny_female:  null,
            front_default:      'string',
            front_female:       null,
            front_shiny:        'string',
            front_shiny_female: null,
        },
        stats: [],
        types: [],
        weight: 1
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedPokemon(undefined);
    };

    useEffect(() => {
        listPokemons().then((response) => {
            setPokemons(response.results);
        });
    }, []);

    useEffect(() => {
        if (!selectedPokemon) return;

        getPokemonDetails(selectedPokemon.name).then((response) => {
            setSelectedPokemonDetails(response);
            handleClickOpen();
        });
    }, [selectedPokemon]);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Pokedex
                        </Typography>
                    </Toolbar>
                </AppBar>,
                
            </Box>

            <Container maxWidth='lg'>
                <Box mt={1}>
                    <PokemonGrid pokemons={pokemons} setSelectedPokemon={setSelectedPokemon} />
                    
                    <PokemonDialog open={open} handleClose={handleClose} selectedPokemonDetails={selectedPokemonDetails} />
                </Box>
            </Container>
        </div>
    );
};