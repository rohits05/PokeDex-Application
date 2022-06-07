export interface UnpatchedPokemonSchema { 
    // pokeData - nullifying
    // sprites as string
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites?: string;
}

export interface PokemonSpritesSchema { 
    normal?: string;
    animated?: string;

}

export interface PokemonSchema { 
    // sprites as object
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites: PokemonSpritesSchema;

}