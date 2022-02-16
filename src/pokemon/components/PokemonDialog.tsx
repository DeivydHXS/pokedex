import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { PokemonDetails } from '../interfaces/pokemonDetails';

interface PokemonDialogProps {
    open: boolean;
    handleClose: () => void;
    selectedPokemonDetails: PokemonDetails;
}

export const PokemonDialog: React.FC<PokemonDialogProps> = (props) => {
    return (
        <Dialog open={props.open} onClose={props.handleClose} >
            <DialogTitle>Pokemon Details</DialogTitle>
            <DialogContent>
                <Card sx={{ minWidth: 275 }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.selectedPokemonDetails.id}.svg`}
                        alt={props.selectedPokemonDetails.name}
                    />
                </Card>
                <DialogContentText>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.selectedPokemonDetails.name}
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};