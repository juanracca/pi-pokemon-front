import React from "react";
import '../styles/Card.modules.css';
// import { useSelector } from "react-redux";


export default function Card({ img, name, id, types, cardColor }){

    return(
        <main className={cardColor}>
            <h3 className='h3card'> {name}</h3>
            <img className='imgCard' src={img} alt="Not found!"  weight='200px' height='200px'/>          
            <h5 className='typesCard'>{types}</h5>
            <h5 className='idCard'>{id}</h5>
        </main>
    );
};