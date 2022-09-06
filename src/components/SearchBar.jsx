import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../actions";

export default function SearchBar(){

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSumbit(e){
        e.preventDefault();
        dispatch(getPokemonName(name));
    };

    return(
        <div>
            <input type="text" className='inputSearch' placeholder='Search Pokemon!' onChange={e => {handleInputChange(e)}}/>
            <button className='btnSearch' onClick={e => {handleSumbit(e)}}>Search</button>
        </div>
    );
};