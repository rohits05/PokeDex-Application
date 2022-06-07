// import { animate } from "framer-motion";
import React from "react";
import { PokemonSchema } from "../../Types/PokemonSchema";
import "./PokeSerachBox.css";

interface PokeSearchResultProps {
    selectedPokemon: PokemonSchema | undefined;
}

const PokeSearchResult = ({selectedPokemon}: PokeSearchResultProps) => {
    const {name, id, height, weight, base_experience, sprites } = selectedPokemon || {} ;

    // const selectedPokemon = false;
    return(
        <div className="poke-result-card">
            {
                selectedPokemon ? 
                (
                    <div>
                        <img src={sprites?.animated || sprites?.normal} alt="pokemon"
                        className="animated-sprite" />
                        <p>Name: {name}</p>
                        <p>Id: {id}</p>
                        <p>Height: {height}</p>
                        <p>Weight: {weight}</p>
                        <p>Base Exp: {base_experience}</p>
                    </div>
                ) : (
                    <h2>Welcome to the PokeDex</h2>
                )
            }
        </div>
    )
}
export default PokeSearchResult;