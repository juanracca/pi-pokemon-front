import axios from 'axios';
import {
    GET_POKEMONS,
    GET_DETAIL,
    CLEAR_DETAIL_STATE,
    GET_TYPES
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

export function getDetail(id){

    return async function(dispatch){
        try{
            const detail = await axios.get('http://localhost:3001/pokemons/' + id);
            const pokemonDetail = detail.data;
            console.log(pokemonDetail)
            return dispatch({
                type: GET_DETAIL,
                payload: pokemonDetail
            });
        } catch(err){
            console.log(err);
        };
    };
};

export function clearDetailState(payload){

    return {
        type: CLEAR_DETAIL_STATE,
        payload
    };
};

export function getTypes(){
    return async function(dispatch){
        const types = await axios.get('http://localhost:3001/types', {

        });
        const allTypes = types.data
        return dispatch({
            type: GET_TYPES,
            payload: allTypes
        });
    };
};