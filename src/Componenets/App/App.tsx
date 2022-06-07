import React from "react";
// import { Interface } from "readline";
import { pokemonData } from "../../Data/pokemonData";
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from "../../Types/PokemonSchema";
import PokeDex from "../PokeDex/PokeDex";
import './App.css';

interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}

// interface Play {
//     name: string; // type
// }

class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemons: [],
        searchPokemons: [],
        selectedPokemon: undefined
    };

    patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                // Crash point
                normal: undefined,
                animated: undefined
            };

            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch(e) {
                console.log("Exception while parsing the sprites: ",e);
            }

            const patchedPokemons: PokemonSchema = {
                ...pokemon, // unspreading the patched over unpatched pk object - all properties
                sprites: parsedSprites
            };
            return patchedPokemons;
        })
        return patchedPokemons;
    }
    componentDidMount() { // lifeCycle-Methods
        // const pokeData = pokemonData;
        // Patch the stringify pokemon sprites
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        );

        // Update the state with the patched pokemons
        this.setState({
            allPokemons: patchedPokemons,
            searchPokemons: patchedPokemons,
        });
    }

    handleInputChange = (inputValue: string) => {
        // filter the searched pokemons
        const {allPokemons} = this.state;
        const searchedPokemons = allPokemons.filter(
            (pokemon: PokemonSchema) => {
                return (
                    pokemon.name && pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
                );
            }
        );
        this.setState({
            searchField: inputValue,
            searchPokemons: searchedPokemons
        });
    };

    handleClick = (pokemonName: string) => {
        const {allPokemons} = this.state;

        // selected pokemons from SBX
        const selectedPokemon = allPokemons.find(
            (pokemon: PokemonSchema) => pokemon.name === pokemonName        )

        // Update State
        this.setState({ selectedPokemon });
    } 

    render(){
        return <div className="App">
            <h1> PokeDex </h1>
            <PokeDex 
                searchedPokemons={this.state.searchPokemons}
                selectedPokemon={this.state.selectedPokemon}
                onPokemonClick={this.handleClick}
                onInputChange={this.handleInputChange}
            />
            </div>
    }
}

export default App;