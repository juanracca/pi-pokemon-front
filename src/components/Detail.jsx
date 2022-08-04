import React from "react";
import '../styles/Detail.modules.css';
import { Link } from "react-router-dom";

export default function Detail(){
    return(
        <div className='divDetail'>
            <br />
            <Link to='/pokemons'>
                <button className='btnDetail'>Back</button>
            </Link>
            <div>

            </div>
            <br />
        </div>
    );
};