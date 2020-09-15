import React, { useState } from 'react'
import Accordion from './Accordion'; 
import Search from './Search'; 
import Dropdown from './Dropdown'; 
import Translate from './Translate'; 

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

const options = [
    {
        label: 'The Color Red', 
        value: 'red'
    }, 
    {
        label: 'The Color Blue', 
        value: 'blue'
    }, 
    {
        label: 'The Color Green', 
        value: 'green'
    }
]; 

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} /> 
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search /> 
    }
}

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown /> 
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate /> 
    }
}

export default () => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div>
        {showAccordion()}
        {showList()}
        {showDropdown()}
        {showTranslate()}
        </div>
    )
}; 
