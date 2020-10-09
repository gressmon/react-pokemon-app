import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import PokemonSearch from 'src/components/pokemon-search';
import PokemonCard from '../components/pokemon-card';
import usePokemon from '../hooks/pokemon.hook';

const PokemonList: FunctionComponent = () => {
    const pokemons = usePokemon();

    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="row">
                    <PokemonSearch />
                    <Link to={`/pokemons/create/`} className="waves-effect waves-light btn" style={{ position: 'fixed', bottom: '25px', right: '25px' }}>
                        <i className="material-icons left">create</i> Nouveau Pokémon
                    </Link>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonList;