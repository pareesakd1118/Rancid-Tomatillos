import "./Main.css"
import Movie from "../Movie/Movie"

function Main({movieData , showDesc}) {
    function displayMovies() {
        return movieData.map(movie => {
            return <Movie 
                    showDesc = {showDesc}
                    title={movie.title}
                    id={movie.id}
                    image={movie.poster_path}
                    rating={movie.average_rating}
                    key={movie.id}
                    />
        })
    }

    return (
        <main>
            <div className="displayedMovies">
            {displayMovies()}
            </div>
        </main>
    )
}

export default Main;