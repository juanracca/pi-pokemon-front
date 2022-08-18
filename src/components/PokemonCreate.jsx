import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTypes } from "../actions";
import { Link } from "react-router-dom";
import '../styles/PokemonCreate.modules.css';

export default function PokemonCreate(){

    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    const [input, setInput] = useState({
        name: '',
        types: '',
        image: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
    });

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch])

    return(
        <div className='divCreate'>
            <h1>Create your Pokemon!</h1>
            <Link to='/pokemons'>
                <button className='btnBack'>Back</button>
            </Link>
            <form action="" className='formCreate'>
                <div>
                    {/* <label htmlFor="">Name:</label> */}
                    <input type="text" name='name' value={input.name} placeholder='Name'/>
                </div>
                <div>
                    {/* <label htmlFor="">Types:</label> */}
                    <select name="" id="" className='selectTypesCreate'>
                        <option value="Types">Types</option>
                        {
                            types.map(type => {
                                return(
                                    <option value={type.name} key={type.id}>{type.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                    {/* <label htmlFor="">Image:</label> */}
                    <input type="text" placeholder='Image' />
                </div>
                <div>
                    {/* <label htmlFor="">HP:</label> */}
                    <input type="number" placeholder='HP' />
                </div>
                <div>
                    {/* <label htmlFor="">Attack:</label> */}
                    <input type="number" placeholder='Attack' />
                </div>
                <div>
                    {/* <label htmlFor="">Defense:</label> */}
                    <input type="number" placeholder='Defense' />
                </div>
                <div>
                    {/* <label htmlFor="">Speed:</label> */}
                    <input type="number" placeholder='Speed' />
                </div>
                <div>
                    {/* <label htmlFor="">Height:</label> */}
                    <input type="number" placeholder='Height' />
                </div>
                <div>
                    {/* <label htmlFor="">Weight:</label> */}
                    <input type="number" placeholder='Weight' />
                </div>
                <button className='btnCreate'>Create!</button>
            </form>
        </div>
    );
};