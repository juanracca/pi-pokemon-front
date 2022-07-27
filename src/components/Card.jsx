import React from "react";

export default function Card({ img, name, type, id }){
    return(
        <main>
            <img src={img} alt="Not found!"/>
            <h3>{name}</h3>
            <h5>{type}</h5>
            <h6>{id}</h6>
        </main>
    );
};