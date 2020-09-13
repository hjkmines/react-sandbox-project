import React from 'react'
import Accordion from './Accordion'; 
import Search from './Search'; 

//en.wikipedia.org/w/api/php?

const items = [
    {
        title: 'What is React?', 
        content: 'React is a front end JavaScript framework'
    }, 
    {
        title: 'Why use React?', 
        content: 'React is a favorite JS library among engineers'
    }, 
    {
        title: 'How do you use React?', 
        content: 'You use React by creating components'
    }
]

export default () => {
    return (
        <div>
            <Search /> 
        </div>
    )
}; 
