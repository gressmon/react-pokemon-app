import React, { FunctionComponent, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

const PokemonCreate: FunctionComponent<RouteComponentProps<[]>> = () => {

    const [id] = useState<number>(new Date().getTime());
    const [pokemon] = useState<Pokemon>(new Pokemon(id));


    return (
        <div>
            <div className="row">
                <h2 className="header center">Nouveau Pokémon</h2>
                <PokemonForm pokemon={pokemon}></PokemonForm>
            </div>
        </div>
    );
}

export default PokemonCreate;