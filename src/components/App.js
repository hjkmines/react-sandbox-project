import React from 'react';
import axios from 'axios';  
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID VE7dHBlfJnjUzOB7G4vP3vth2XkNZhZF_l3SWMgs1i8'
            }
        })
    }
    
    render() {
        return (
        <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        )
    }
}

export default App; 
