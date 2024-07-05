export const fetchData = async () => {
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f4384d2e71fe047b2aea1370308c02bb&page=1");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null; 
    }
}
