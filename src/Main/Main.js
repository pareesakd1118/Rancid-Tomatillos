import "./Main.css"
import Movie from "../Movie/Movie"
import { Link } from "react-router-dom"


function Main({movieData , showDesc}) {
    function displayMovies() {

        return movieData.map(movie => {
            return (
                    <Link to= {`/${movie.id}`} >
                        <Movie 
                        showDesc = {showDesc}
                        title={movie.title}
                        id={movie.id}
                        image={movie.poster_path}
                        rating={movie.average_rating}
                        key={movie.id}
                        />
                    </Link>
                    )

        })
    }

    return (
            <div className="displayedMovies">
            {displayMovies()}
            </div>
    )
}

export default Main;