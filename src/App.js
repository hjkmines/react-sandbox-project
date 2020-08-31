import React, { Component } from 'react';

class App extends Component {

state = {
  characters: []
}

componentDidMount() {
  fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())                                               
    .then(result => this.setState({
      characters: result.results 
    }))
}

render() {
  return (
    <div className='App'> 
    </div>
  )
}
}

export default App; 