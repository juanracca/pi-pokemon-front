import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import Card from "./Card";
import { getAllPokemons, getTypes, filterByType, orderByName, filterByAttack, filterByDefense, filterByHp, filterBySpeed } from "../actions/index";
import '../styles/Home.modules.css';

export default function Home(){

    const dispatch = useDispatch();
    const allPokemons  = useSelector((state) => state.allPokemons);
    const types = useSelector((state) => state.types);
    const [, setOrder ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ pokemonsPerPage, ] = useState(15);
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

    function handleFilterType(e){
        dispatch(filterByType(e.target.value));
    };

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllPokemons());
    };

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Order by ${e.target.value}`);
    };

    function handleSortAttack(e){
        e.preventDefault();
        dispatch(filterByAttack(e.target.value));
        setCurrentPage(1);
        setOrder(`Order by ${e.target.value}`);
    };

    function handleSortDefense(e){
        e.preventDefault();
        dispatch(filterByDefense(e.target.value));
        setCurrentPage(1);
        setOrder(`Order by ${e.target.value}`);
    };

    function handleSortHp(e){
        e.preventDefault();
        dispatch(filterByHp(e.target.value));
        setCurrentPage(1);
        setOrder(`Order by ${e.target.value}`);
    };

    function handleSortSpeed(e){
        e.preventDefault();
        dispatch(filterBySpeed(e.target.value));
        setCurrentPage(1);
        setOrder(`Order by ${e.target.value}`);
    };

    return(
        <div className='divHome'>
            <div className='divTitleBtnFilters'>
                <br/>
                <Link to='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' className='h1Home' alt='Not Found'/>
                </Link>
                <Link to='/create'>
                    <button className='btnCreatePokemons'>Create Pokemon!</button>
                </Link>
                
                <button className='btnResetFilters' onClick={e => {handleClick(e)}}>Reset Filters</button>
                <SearchBar/>
                <br/>
                <div className='divFilters'>
                <select className='selectTypesHome' onChange={e => {handleFilterType(e)}}>
                    <option value="All">Type</option>
                    {
                        types.map(type => {
                            return(
                                <option value={type.name} key={type.id}>{type.name}</option>
                            )
                        })
                    }
                </select>
                <select className='selectAZHome' onChange={e => {handleSort(e)}}>
                    <option value='All'>Name</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
                <select className='selectAttackHome' onChange={e => {handleSortAttack(e)}}>
                    <option value="Attack">Attack</option>
                    <option value="Higher">Higher</option>
                    <option value="Lower">Lower</option>
                </select>
                <select className='selectDefenseHome' onChange={e => {handleSortDefense(e)}}>
                    <option value="Defense">Defense</option>
                    <option value="Higher">Higher</option>
                    <option value="Lower">Lower</option>
                </select>
                <select className='selectHpHome' onChange={e => {handleSortHp(e)}}>
                    <option value="HP">HP</option>
                    <option value="Higher">Higher</option>
                    <option value="Lower">Lower</option>
                </select>
                <select className='selectSpeedHome' onChange={e => {handleSortSpeed(e)}}>
                    <option value="Speed">Speed</option>
                    <option value="Higher">Higher</option>
                    <option value="Lower">Lower</option>
                </select>
                </div>
            </div>
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
                                cardColor={`${el.types[0]}`}
                                />
                            </Link>
                        </div>
                    )
                }) : <img className='imgLoadingHome' src="https://c.tenor.com/Hg2Mb_mQdhYAAAAi/pokemon-pokeball.gif" alt="" />
            }
            <br />
            <div className='divPaginadoHome'>
            <Paginado 
            pokemonsPerPage = { pokemonsPerPage }
            allPokemons = { allPokemons.length }
            paginado = { paginado }
            />
            </div>
            <br />
        </div>
    );
};