import { 
    GET_POKEMONS,
    GET_DETAIL,
    CLEAR_DETAIL_STATE,
    GET_TYPES
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

        default:
            return state;
    };
};

export default rootReducer;