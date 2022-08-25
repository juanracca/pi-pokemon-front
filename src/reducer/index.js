import { 
    GET_POKEMONS,
    GET_DETAIL,
    CLEAR_DETAIL_STATE,
    GET_TYPES,
    POST_POKEMON,
    FILTER_BY_TYPE
} from "../actions/types"

const initialState = {
    allPokemons : [],
    pokemonsCopy : [],
    detail: [],
    types: [],
};

function rootReducer(state = initialState, { type, payload }) {
    
    switch (type) {

        case GET_POKEMONS:
            
            return{
                ...state,
                allPokemons: payload,
                pokemonsCopy: payload,
            };
            
        case GET_DETAIL:

            return{
                ...state,
                detail: [payload]
            };

        case CLEAR_DETAIL_STATE: 

            return{
                ...state,
                detail: []
            };

        case GET_TYPES:

            return{
                ...state,
                types: payload
            };

        case POST_POKEMON:

            return{
                ...state
            };

        case FILTER_BY_TYPE:
            const pokemons = state.pokemonsCopy;
            const pokemonsFilteredByType = payload === "All" ? pokemons : pokemons.filter(el => el.types[0] === payload || el.types[1] === payload || el.types[2] === payload);
            return{
                ...state,
                allPokemons: pokemonsFilteredByType
            };

        default:
            return state;
    };
};

export default rootReducer;