import React, { useState, useEffect } from 'react'; 

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false); 

    useEffect(() => {
        document.body.addEventListener('click', () => {
            if (ref.current.contains(event.target)) {
                return; 
            }
            setOpen(false)
        })
    }, [])

    const renderedOptions = options.map( option => {
        if (option.value === selected.value) {
            return null; 
        }

        return (
            <div 
                key={option.value} 
                className='item'
                onClick={() => {
                    console.log('clicked')
                    onSelectedChange(option)
                }}
            >
                {option.label}
            </div>
        )
    })

    console.log(ref.current)

    return (
        <div 
            ref={ref} 
            className='ui form'
        >
            <div className='field'>
                <label className='label'>Select a color</label>
                <div 
                    onClick={() => {
                        console.log('clicked')
                        setOpen(!open)
                    }} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown; 