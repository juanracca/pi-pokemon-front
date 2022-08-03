import { 
    GET_POKEMONS 
} from "../actions/types"

const initialState = {
    allPokemons : [],
    pokemonsCopy : [],
};

function rootReducer(state = initialState, { type, payload }) {
    
    switch (type) {

        case GET_POKEMONS:
            
            return{
                ...state,
                allPokemons: payload,
                pokemonsCopy: payload,
            };
            
        default:
            return state;
    };
};

export default rootReducer;