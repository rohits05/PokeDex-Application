import React from "react";
import "./SearchBox.css";

interface SearchBoxProps{
    onInputChange: (inputValue: string) => void;
}

const SerachBox = ({onInputChange}: SearchBoxProps) => {
    return(
        <input onChange={(e) => {
            console.log(e.target.value);
            onInputChange(e.target.value);
        }}
            className="search-box" 
            type="search"
            placeholder="Search Pokemons"
        />
    )
}

export default SerachBox;