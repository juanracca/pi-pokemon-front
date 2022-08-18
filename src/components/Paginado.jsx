import React from "react";
import '../styles/Paginado.modules.css';

export default function Paginado({pokemonsPerPage, allPokemons, paginado}){
    const pageNumbers = [];

    for(let i = 1; i < Math.ceil(allPokemons / pokemonsPerPage); i++){
        pageNumbers.push(i);
    };

    return(
        <nav>
            <ul>
                { pageNumbers.map(number => {
                        return(
                            <label key={number}>
                                <button className='paginado' key={number} onClick={() => paginado(number)}>{number}</button>
                            </label>
                        );
                    }) }
            </ul>
        </nav>
    );
};