import axios from 'axios';
import {
    GET_POKEMONS,
    GET_DETAIL,
    CLEAR_DETAIL_STATE,
    GET_TYPES,
    FILTER_BY_TYPE,
    GET_POKEMON_NAME,
    ORDER_BY_NAME,
    FILTER_BY_ATTACK,
    FILTER_BY_DEFENSE,
    FILTER_BY_HP,
    FILTER_BY_SPEED
} from "./types";

export function getAllPokemons(){

    return async function(dispatch){
        let allPokemons = await axios.get('http://localhost:3001/pokemonsDb');
        let pokemons = allPokemons.data;
        pokemons.sort((a,b) => a.id - b.id);
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

export function postPokemon(payload){
    return async function(dispatch){
        const post = await axios.post('http://localhost:3001/pokemon', payload);
        return post;
    };
};

export function filterByType(payload){
    return{
        type: FILTER_BY_TYPE,
        payload
    };
};

export function getPokemonName(payload){
    return async function(dispatch){
        try{
            const pokemonName = await axios.get('http://localhost:3001/pokemonsdb?name=' + payload);
            console.log(pokemonName.data)
            return dispatch({
                type: GET_POKEMON_NAME,
                payload: pokemonName.data
            });
        } catch(err){
            console.log(err);
            alert('Pokemon not found!');
        };
    };
};

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload,
    };
};

export function filterByAttack(payload){
    return{
        type: FILTER_BY_ATTACK,
        payload,
    };
};

export function filterByDefense(payload){
    return{
        type: FILTER_BY_DEFENSE,
        payload,
    };
};

export function filterByHp(payload){
    return{
        type: FILTER_BY_HP,
        payload
    };
};

export function filterBySpeed(payload){
    return{
        type: FILTER_BY_SPEED,
        payload
    };
};

export function deletePokemon(payload){
    return async function(dispatch){
        const deletePoke = await axios.delete('http://localhost:3001/pokemon/' + payload);
        return deletePoke;
    };
};