import React from "react";
import { Link } from "react-router-dom";
import '../styles/LandingPage.modules.css'

export default function LandingPage(){

    return(
        <div className='divLanding'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' className='h1Landing' alt='Not Found'/>
            <Link to='/pokemons'>
             <button className='btnLanding'>GO!</button>
            </Link>
        </div>
    );
};