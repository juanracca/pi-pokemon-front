import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){

    return(
        <div>
            <h1>POKEMON</h1>
            <Link to='/pokemons'>
             <button>ENTER</button>
            </Link>
        </div>
    );
};