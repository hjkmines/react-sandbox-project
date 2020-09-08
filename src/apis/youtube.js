import axios from 'axios'; 
const KEY ='adfoijdi5325fdsaf5sdf5d5f4sd8484'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        type: 'video', 
        maxResults: 5, 
        key: KEY 
    }
}); 




