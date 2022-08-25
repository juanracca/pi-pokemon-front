import React from "react";
import '../styles/Card.modules.css';
// import { useSelector } from "react-redux";


export default function Card({ img, name, id, types, cardColor }){
    
    // const tipos = `${types.map(el => el[0])}`
    console.log(cardColor)
    console.log(id)

    return(
        <main className={cardColor}>
            <h3 className='h3card'> {name}</h3>
            <img className='imgCard' src={img} alt="Not found!"  weight='200px' height='200px'/>          
            <h5 className='typesCard'>{types}</h5>
            <h5 className='idCard'>{id}</h5>
        </main>
    )



    // const pokemons = useSelector((state) => state.allPokemons)
    // const pokemonTypes = pokemons.map(el => el.types[0])
    // console.log(pokemonTypes)
    // const classNames = pokemonTypes.map(ele => {
    //     console.log(ele)
    //     if(ele === 'grass'){
    //         var className = 'mainCardGrass'
    //     }
    //     if(ele === 'water'){
    //         className = 'mainCardWater'
    //     }
    //     if(ele === 'fire'){
    //         className = 'mainCardGrass'
    //     }
    //     if(ele === 'electric'){
    //         className = 'mainCardGrass'
    //     }
    //     if(ele === 'poison'){
    //         className = 'mainCardGrass'
    //     }
    //     if(ele === 'dark'){
    //         className = 'mainCardGrass'
    //     }
    //     if(ele === 'rock'){
    //         className = 'mainCardGrass'
    //     }
    //     if(ele === 'ground'){
    //         className = 'mainCardGrass'
    //     }
    //     if(ele === 'psychic'){
    //         className = 'mainCardGrass'
    //     }
    //     if(ele === 'fighting'){
    //         className = 'mainCardGrass'
    //     }
    //     if(ele === 'normal'){
    //         className = 'mainCardGrass'
    //     }
    //     if(ele === 'bug'){
    //         className = 'mainCardGrass'
    //     }
    //     if(ele === 'ice'){
    //         className = 'mainCardIce'
    //     }
    //     else {
    //         className = 'mainCardDragon'
    //     }
    // })

    // console.log(classNames)
    
    
};