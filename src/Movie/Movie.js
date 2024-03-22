import "./Movie.css"

function Movie({ title, id, image}) {

    return (
        <div title={title} className="movie" style={{ backgroundImage: `url(${image})` }} id={id}>
        </div>
    )
}

export default Movie;

// style={{marginRight: spacing + 'em'}} when using JSX.
   // <img src={image} alt={`image of ${title} movie poster`}/> */