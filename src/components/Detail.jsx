import React, { useEffect } from "react";
import '../styles/Detail.modules.css';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetailState } from "../actions";

export default function Detail(){

    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(clearDetailState())
        };
    }, [dispatch, id]);

    const myPokemon = useSelector((state) => state.detail)
    console.log(myPokemon)

    return(
        <div className='divDetail'>
            <br />
            {
                myPokemon.length > 0 ?
                <div>
                    <Link to='/pokemons'>
                        <button className='btnDetail'>Back</button>
                    </Link>
                    <img src={myPokemon[0].image} alt="" className='detailImage'/>
                    <div className='divDetailText'>
                        <h2 className='detailName'>Name: {myPokemon[0].name.toUpperCase()}</h2>
                        <h2 className='detailTypes'>Types: {myPokemon[0].types.map(el => ' ' + el.toUpperCase())}</h2>
                        <h2 className='detailHp'>HP: {myPokemon[0].hp}</h2>
                        <h2 className='detailAttack'>Attack: {myPokemon[0].attack}</h2>
                        <h2 className='detailDefense'>Defense: {myPokemon[0].defense}</h2>
                        <h2 className='detailSpeed'>Speed: {myPokemon[0].speed}</h2>
                        <h2 className='detailHeight'>Height: {myPokemon[0].height}</h2>
                        <h2 className='detailWeight'>Wieght: {myPokemon[0].weight}</h2>
                    </div>
                </div> :
                <img className='imgLoading' src="https://c.tenor.com/Hg2Mb_mQdhYAAAAi/pokemon-pokeball.gif" alt="" />
            }
            <br />
        </div>
    );
};