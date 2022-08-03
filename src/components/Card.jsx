import React from "react";
import '../styles/Card.modules.css'

export default function Card({ img, name, id, types }){
    
    return(
        <main className='mainCard'>
            <h3 className='h3card'> {name}</h3>
            <img className='imgCard' src={img} alt="Not found!"  weight='200px' height='200px'/>
            <h5>{types}</h5>
            
        </main>
    );
};