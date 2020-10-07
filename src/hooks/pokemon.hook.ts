import { useEffect, useState } from "react";
import POKEMONS from "../models/mock-pokemon";
import Pokemon from "../models/pokemon";

const usePokemon = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return pokemons;
}

export default usePokemon;