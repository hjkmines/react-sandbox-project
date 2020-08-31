import React from 'react';
import './Cards.css'; 

export default function Card({character, setActiveCard}) {
    const { image, name, species, gender } = character 

    return (
        <div className='card' onClick={()=> setActiveCard(character)}>
            <h3>{name}</h3> 
            <img src={image} alt={name} />
            <p>{gender}</p>
            <p>{species}</p>
        </div>
    )
}
