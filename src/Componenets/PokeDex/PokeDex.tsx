import React from "react";
import { PokemonSchema } from "../../Types/PokemonSchema";
import Pokelist from "../Pokelist/Pokelist";
import PokeSearchResult from "../PokeSearchBox/PokeSearchBox";
import SearchBox from "../SearchBox/SearchBox";
// import SerachBox from "../SearchBox/SearchBox";
import "./PokeDex.css";

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onPokemonClick: (inputValue: string) => void;
    onInputChange: (inputValue: string) => void;
}

const PokeDex = ({searchedPokemons, onInputChange, selectedPokemon, onPokemonClick}: PokedexProps) => {
    return(
        <div className="pokedex-container">
            <div className="pokelist-conatiner">
                <SearchBox onInputChange = {onInputChange}/>
                <Pokelist 
                    onPokemonClick={onPokemonClick}
                    searchedPokemons = {searchedPokemons}
                />
            </div>
            <div className="pokesearchresult-conatiner">
                <PokeSearchResult 
                    selectedPokemon = {selectedPokemon}
                />
            </div>
        </div>
    )
}

export default PokeDex;