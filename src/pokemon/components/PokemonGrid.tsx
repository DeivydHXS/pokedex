import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { PokemonItemInterface } from '../services/listPokemons';

interface PokemonGridProps {
    pokemons: PokemonItemInterface[];
    setSelectedPokemon: (pokemom: PokemonItemInterface) => void;
}

const PokemonGrid: React.FC<PokemonGridProps> = ({pokemons, setSelectedPokemon}) => {
    return (
        <Grid container spacing={2}>
            {pokemons.map(pokemon => (
                <Grid item xs={6} lg={3}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20, ml: 10 }} color="text.primary">
                                {pokemon.name}
                            </Typography>
                        </CardContent>
                        <CardActions  sx={{ ml: 10, mb: 2 }}>
                            <Button size="small" variant='text' onClick={() => setSelectedPokemon(pokemon)}>Catch it!</Button>
                        </CardActions>
                    </Card>
                </Grid>     
            ))}
        </Grid>
    );
};

export default PokemonGrid;