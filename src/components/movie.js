export const fetchData = async () => {
    try {
        const API_KEY = process.env.REACT_APP_TMDB_KEY;
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f4384d2e71fe047b2aea1370308c02bb&language=en-US&page=1");
        const data = await response.json();
        console.log(data);
        return data;
    }catch(e){
        console.log(e);
    }
}
