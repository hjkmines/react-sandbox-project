import React from 'react'

export default function Card({character}) {
    const { image, name, species, gender } = character 

    return (
        <div className='card'>
            <h3>{name}</h3> 
            <img src={image} alt={name} />
            <p>{gender}</p>
            <p>{species}</p>
        </div>
    )
}
