import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loader from 'src/components/loader';
import PokemonService from 'src/services/pokemon-service';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        PokemonService.getPokemon(+match.params.id)
            .then((pokemon) => {
                setPokemon(pokemon)
            })
    }, [match.params.id]);

    return (
        <div>
            { pokemon ? (
                <div className="row">
                    <h2 className="header center">Éditer {pokemon.name}</h2>
                    <PokemonForm pokemon={pokemon} isEdit={true}></PokemonForm>
                </div>
            ) : (
                <h4 className="center">
                    <Loader />
                </h4>
            )}
        </div>
    );
}

export default PokemonEdit;