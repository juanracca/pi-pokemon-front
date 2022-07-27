import axios from 'axios';
import {
    GET_POKEMONS
} from "./types";

export function getAllPokemons(){
    return async function(dispatch){
        let allPokemons = await axios.get('https://pi-pokemon-back.herokuapp.com/pokemonsdb');
        console.log(allPokemons.data)
        return dispatch({
            type: GET_POKEMONS,
            payload: allPokemons.data
        });
    };
};