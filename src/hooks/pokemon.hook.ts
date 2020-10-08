import { useEffect, useState } from "react";
import PokemonService from "src/services/pokemon-service";
import Pokemon from "../models/pokemon";

const usePokemon = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        PokemonService.getPokemons()
        .then((pokemons) => {
            setPokemons(pokemons)
        })
    }, []);

    return pokemons;
}

export default usePokemon;