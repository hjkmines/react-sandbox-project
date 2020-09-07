import React from 'react'; 
import SearchBar from './SearchBar'; 
import youtube from '../apis/youtube'; 
import VideoList from './VideoList'; 
import VideoDetail from './VideoDetail'; 

const KEY= 'sdfiuhjduducj84894sdfasdf'; 

class App extends React.Component {
    render() {
        return (
            <div className='ui container'>
            <SearchBar /> 
            </div>
        )
    }
}

export default App; 