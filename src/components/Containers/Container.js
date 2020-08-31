import React from 'react'
import CardContainer from './CardContainer'; 
import Card from '../Cards/Card'; 
import './Container.css'; 

export default function Container({characters}) {
    return (
        <div className='container'>
            <CardContainer characters={characters} /> 
            <Card character={characters[0]} /> 
        </div>
    )
}
