import { 
    GET_POKEMONS,
    GET_DETAIL,
    CLEAR_DETAIL_STATE,
    GET_TYPES,
    POST_POKEMON,
    FILTER_BY_TYPE,
    GET_POKEMON_NAME,
    ORDER_BY_NAME,
    FILTER_BY_ATTACK,
    FILTER_BY_DEFENSE,
    FILTER_BY_HP,
    FILTER_BY_SPEED,
    DELETE_POKEMON,
    
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
                detail: payload
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

        case GET_POKEMON_NAME:
            
            return{
                ...state,
                allPokemons: payload
            };

        case ORDER_BY_NAME:

            const sortedArr = payload === "A-Z" ?
            state.allPokemons.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1;
                }
                return 0;
            }) : 
            state.allPokemons.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return 1;
                }
                return 0;
            });

            return{
                ...state,
                allPokemons: payload === 'All' ? state.allPokemons.sort((a,b) => a.id - b.id) : sortedArr
            };

        case FILTER_BY_ATTACK: 

            const sortedArr2 = payload === "Higher" ? 
            state.allPokemons.sort(function(a, b){
                if(a.attack > b.attack){
                    return -1;
                }
                if(a.attack < b.attack){
                    return 1;
                }
                return 0;
            }) : 
            state.allPokemons.sort(function(a, b){
                if(a.attack > b.attack){
                    return 1;
                }
                if(a.attack < b.attack){
                    return -1;
                }
                return 0;
            });

            return{
                ...state,
                allPokemons: payload === "Attack" ? state.allPokemons.sort((a,b) => a.id - b.id) : sortedArr2
            };

        case FILTER_BY_DEFENSE:

            const sortedArr3 = payload === "Higher" ? 
            state.allPokemons.sort(function(a, b){
                if(a.defense > b.defense){
                    return -1;
                }
                if(a.defense < b.defense){
                    return 1;
                }
                return 0;
            }) : 
            state.allPokemons.sort(function(a, b){
                if(a.defense > b.defense){
                    return 1;
                }
                if(a.defense < b.defense){
                    return -1;
                }
                return 0;
            });

            return{
                ...state,
                allPokemons: payload === "Defense" ? state.allPokemons.sort((a,b) => a.id - b.id) : sortedArr3
            };

        case FILTER_BY_HP:

            const sortedArr4 = payload === "Higher" ? 
            state.allPokemons.sort(function(a, b){
                if(a.hp > b.hp){
                    return -1;
                }
                if(a.hp < b.hp){
                    return 1;
                }
                return 0;
            }) : 
            state.allPokemons.sort(function(a, b){
                if(a.hp > b.hp){
                    return 1;
                }
                if(a.hp < b.hp){
                    return -1;
                }
                return 0;
            });

            return{
                ...state,
                allPokemons: payload === "HP" ? state.allPokemons.sort((a,b) => a.id - b.id) : sortedArr4
            };

        case FILTER_BY_SPEED:

            const sortedArr5 = payload === "Higher" ? 
            state.allPokemons.sort(function(a, b){
                if(a.speed > b.speed){
                    return -1;
                }
                if(a.speed < b.speed){
                    return 1;
                }
                return 0;
            }) : 
            state.allPokemons.sort(function(a, b){
                if(a.speed > b.speed){
                    return 1;
                }
                if(a.speed < b.speed){
                    return -1;
                }
                return 0;
            });

            return{
                ...state,
                allPokemons: payload === "Speed" ? state.allPokemons.sort((a,b) => a.id - b.id) : sortedArr5
            };

        case DELETE_POKEMON:

            return{
                ...state,
            }

        default:
            return state;
    };
};

export default rootReducer;