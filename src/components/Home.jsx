import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import Card from "./Card";
import { getAllPokemons } from "../actions/index"

export default function Home(){

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch]);
    const { allPokemons } = useSelector((state) => state)
    console.log(allPokemons)


    return(
        <div>
            <br/>
            <Link to='/create'>
                <button>Create Pokemon</button>
            </Link>
            <h1>Pokemon</h1>
            <button>Reload Pokemons</button>
            <SearchBar/>
            <br/>
            <select>
                <option value="All">Type</option>
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
            <Paginado/>
            {
                allPokemons? allPokemons.map(el => {
                    return(
                        <div>
                            <Link to ={'/pokemons/' + el.id}>
                                <Card
                                img={el.img}
                                name={el.name}
                                type={el.type.map(el => `${el.name} `)}
                                key={el.id}
                                />
                            </Link>
                        </div>
                    )
                }) : console.log(allPokemons)
            }
        </div>
    );
};