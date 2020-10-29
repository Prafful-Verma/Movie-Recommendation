import React , { createContext , useState} from 'react'; 

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies ] = useState([
        {title: 'X-men' , director: 'xyz' , id: 1},
        {title: 'X-men2' , director: 'xyz' , id: 2}
    ]);
    
}