import React from "react";
import "./Pokecard.css";

interface PokecardProps {
    spriteUrl?: string;
    name: string ; 
    onPokemonClick: (inputValue: string) => void;
}
const Pokecard = ({spriteUrl, name, onPokemonClick}: PokecardProps) => {
    return(
        <div onClick={() => onPokemonClick(name)} className="poke-card">
            {/* image - add image*/}
            <img className="pokemon-sprite" alt="pokemon" src={spriteUrl} />
            <p> {name} </p>
            
        </div>
    )
}

export default Pokecard;