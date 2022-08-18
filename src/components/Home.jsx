import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import Card from "./Card";
import { getAllPokemons, getTypes } from "../actions/index";
import '../styles/Home.modules.css';

export default function Home(){

    const dispatch = useDispatch();
    const allPokemons  = useSelector((state) => state.allPokemons);
    const types = useSelector((state) => state.types);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ pokemonsPerPage, ] = useState(9);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getAllPokemons());
        dispatch(getTypes());
    }, [dispatch]);

    allPokemons.sort((a,b) => a.id - b.id)

    console.log(allPokemons);


    return(
        <div className='divHome'>
            <br/>
            <Link to='/create'>
                <button>Create Pokemon</button>
            </Link>
            
            <button>Reload Pokemons</button>
            <SearchBar/>
            <br/>
            <select>
                <option value="All">Type</option>
                {
                    types.map(type => {
                        return(
                            <option value={type.name} key={type.id}>{type.name.toUpperCase()}</option>
                        )
                    })
                }
            </select>
            <select>
                <option value="Existing">Existing</option>
                <option value="Created">Created</option>
            </select>
            <select>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            <select>
                <option value="Attack">Attack</option>
                <option value="Higher">Higher</option>
                <option value="Lower">Lower</option>
            </select>
            <select>
                <option value="Defense">Defense</option>
                <option value="Higher">Higher</option>
                <option value="Lower">Lower</option>
            </select>
            <select>
                <option value="HP">HP</option>
                <option value="Higher">Higher</option>
                <option value="Lower">Lower</option>
            </select>
            <select>
                <option value="Speed">Speed</option>
                <option value="Higher">Higher</option>
                <option value="Lower">Lower</option>
            </select>
            <Paginado
            pokemonsPerPage = { pokemonsPerPage }
            allPokemons = { allPokemons.length }
            paginado = { paginado }
            />
            {
                currentPokemons ? currentPokemons.map(el => {
                    return(
                        <div key={el.id} className='divHomeCards'>
                            <Link to ={'/pokemons/' + el.id}>
                                <Card
                                img={el.image}
                                types={'Type:  ' + el.types.map(ele => '  ' + ele.toUpperCase())}
                                id= {'#  ' + el.id}
                                name={el.name.toUpperCase()}
                                />
                            </Link>
                        </div>
                    )
                }) : <img className='imgLoadingHome' src="https://c.tenor.com/Hg2Mb_mQdhYAAAAi/pokemon-pokeball.gif" alt="" />
            }
            <br />
            <Paginado 
            pokemonsPerPage = { pokemonsPerPage }
            allPokemons = { allPokemons.length }
            paginado = { paginado }
            />
            <br />
        </div>
    );
};