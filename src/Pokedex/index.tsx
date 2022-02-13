import { AppBar, Box, Button, Card, CardActions, CardContent, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getPokemonDetails } from '../pokemon/services/getPokemon';
import { listPokemons, PokemonItemInterface } from '../pokemon/services/listPokemons';
import MenuIcon from '@mui/icons-material/Menu';

interface PokedexProps {
    
}

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
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Pokedex
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container maxWidth='lg'>
                <Box mt={1}>
                    <Grid container spacing={2}>
                        {pokemons.map(pokemon => (
                            <Grid item xs={6} lg={3}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {pokemon.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => setSelectedPokemon(pokemon)}>Catch it!</Button>
                                    </CardActions>
                                </Card>
                            </Grid>     
                        ))}
                    </Grid>
                    
                    <h3>Pokemon selecionado: {selectedPokemon?.name || 'Nenhum pokemon selecionado.'}</h3>
                    {JSON.stringify(selectedPokemonDetails, undefined, 2)}
                </Box>
            </Container>
        </div>
    );
};

export default Pokedex;