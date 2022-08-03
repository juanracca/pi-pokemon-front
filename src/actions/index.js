import axios from 'axios';
import {
    GET_POKEMONS
} from "./types";

export function getAllPokemons(){

    return async function(dispatch){
        let allPokemons = await axios.get('http://localhost:3001/pokemonsDb');
        let pokemons = allPokemons.data;

        return dispatch({
            type: GET_POKEMONS,
            payload: pokemons
        });
    };
};