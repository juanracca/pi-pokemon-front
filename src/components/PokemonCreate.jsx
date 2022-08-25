import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTypes, postPokemon, getAllPokemons } from "../actions";
import { Link, useNavigate } from "react-router-dom";
import '../styles/PokemonCreate.modules.css';

export default function PokemonCreate(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const types = useSelector((state) => state.types);
    const allPokemonsIds = useSelector((state) => state.allPokemons.map(el => el.id));
    const newPokemonId = allPokemonsIds.length + 1;
    useEffect(() => {
        dispatch(getTypes());
        dispatch(getAllPokemons());
    }, [dispatch]);
    const [input, setInput] = useState({
        id: newPokemonId,
        name: '',
        types: [],
        image: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
    });

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    function handleSelect(e){
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        });
    };

    function handleClick(e){
        if(input.name.length === 0){
            alert('Complete the name before creating the Pokemon!');
            e.preventDefault();
        }
        else if(input.types.length === 0){
            alert('Select the types of your Pokemon!');
            e.preventDefault();
        }
        else if(input.image.length === 0){
            alert('Add an image before creating the Pokemon!');
            e.preventDefault();
        }
        else if(input.hp.length === 0){
            alert('Complete the HP of your Pokemon!');
            e.preventDefault();
        }
        else if(input.attack.length === 0){
            alert('Complete the Attack of your Pokemon!');
            e.preventDefault();
        }
        else if(input.defense.length === 0){
            alert('Complete the Defense of your Pokemon!');
            e.preventDefault();
        }
        else if(input.speed.length === 0){
            alert('Complete the Speed of your Pokemon!');
            e.preventDefault();
        }
        else if(input.height.length === 0){
            alert('Complete the Height of your Pokemon!');
            e.preventDefault();
        }
        else if(input.weight.length === 0){
            alert('Complete the Weight of your Pokemon!');
            e.preventDefault();
        }

        else{
            console.log(input)
            e.preventDefault()
            dispatch(postPokemon(input))
            console.log(input)
            alert('The Pokemon has been created!')
            setInput({
                id: '',
                name: '',
                types: [],
                image: '',
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
            });
            navigate('/pokemons');
        };
    };

    return(
        <div className='divCreate'>
            <h1>Create your Pokemon!</h1>
            <Link to='/pokemons'>
                <button className='btnBack'>Back</button>
            </Link>
            <form action="" className='formCreate'>
                <div>
                    <input type="text" name='name' value={input.name} placeholder='Name' onChange={e => {handleChange(e)}}/>
                </div>
                <div>
                    <select name="types" className='selectTypesCreate' onChange={e => {handleSelect(e)}}>
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
                    <input type="text" name='image' placeholder='Image' value={input.image} onChange={e => {handleChange(e)}}/>
                </div>
                <div>
                    <input type="number" name='hp' placeholder='HP' value={input.hp} onChange={e => {handleChange(e)}}/>
                </div>
                <div>
                    <input type="number" name='attack' placeholder='Attack' value={input.attack} onChange={e => {handleChange(e)}}/>
                </div>
                <div>
                    <input type="number" name='defense' placeholder='Defense' value={input.defense} onChange={e => {handleChange(e)}}/>
                </div>
                <div>
                    <input type="number" name='speed' placeholder='Speed' value={input.speed} onChange={e => {handleChange(e)}}/>
                </div>
                <div>
                    <input type="number" name='height' placeholder='Height' value={input.height} onChange={e => {handleChange(e)}}/>
                </div>
                <div>
                    <input type="number" name='weight' placeholder='Weight' value={input.weight} onChange={e => {handleChange(e)}}/>
                </div>
                <button className='btnCreate' type='submit' onClick={e => {handleClick(e)}}>Create!</button>
            </form>
        </div>
    );
};