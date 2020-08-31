import React from 'react'
import Card from '../Cards/Card'; 

export default function CardContainer({characters}) {

const characterCards = characters.map(character => <Card character={character} /> )
    return (
        <div>
            {characterCards}
        </div>
    )
}
