import "./Main.css"
import Movie from "../Movie/Movie"

function Main({movieData}) {
    function displayMovies() {
        return movieData.map(movie => {
            return <Movie 
                    title={movie.title}
                    id={movie.id}
                    image={movie.poster_path}
                    rating={movie.average_rating}
                    />
        })
    }

    return (
        <main>
            {displayMovies()}
        </main>
    )
}

export default Main;