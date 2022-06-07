import React from "react";
import { PokemonSchema } from "../../Types/PokemonSchema";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokelist.css";

interface PokeListProps {
    searchedPokemons: PokemonSchema[];
    onPokemonClick: (inputValue: string) => void;
}

const Pokelist = ({searchedPokemons, onPokemonClick}: PokeListProps) => {
    return(
        <div className="poke-list">
            {/* <Pokecard name="Pikachu" />
            <Pokecard name="Bulbasaur" />
            <Pokecard name="Ivysaur" />
            <Pokecard name="Venusaur" />
            <Pokecard name="Charizard" /> */}
             {
                 searchedPokemons.map((pokemon) => {
                     return ( // Data handling
                         pokemon.name && (
                            <Pokecard
                            onPokemonClick={onPokemonClick}
                            key={pokemon.id}
                            name={pokemon.name}
                            spriteUrl={pokemon.sprites.normal}
                          />
                         )
                         
                     )
                 })
             }
        </div>
    )
}

export default Pokelist;