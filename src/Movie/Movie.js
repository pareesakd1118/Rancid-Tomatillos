import "./Movie.css"
import { Link } from "react-router-dom"
function Movie({ title, id, image, showDesc}) {
    return (
        <div title={title} className="movie" onClick = {evt => showDesc(evt)} style={{ backgroundImage: `url(${image})` }} id={id}>
        </div>
    )
}

export default Movie;

// style={{marginRight: spacing + 'em'}} when using JSX.
   // <img src={image} alt={`image of ${title} movie poster`}/> */