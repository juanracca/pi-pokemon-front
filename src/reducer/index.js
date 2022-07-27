import { 
    GET_POKEMONS 
} from "../actions/types"

const initialState = {
    allPokemons : [],
    pokemonsCopy : [],
};

function rootReducer(state = initialState, { type, payload }) {

    switch (type) {
        case GET_POKEMONS :
            console.log(payload)
            return{
                ...state,
                allPokemons: payload,
                pokemonsCopy: payload,
            };
        default:
            console.log(state.allPokemons)
            return state;
    };
};

export default rootReducer;