import "./Movie.css"

function Movie({ title, rating, id, image}) {

    return (
        <div id={id}>
            <h2>{title}</h2>
            <img src={image} alt={`image of ${title} movie poster`}/>
            <p>{rating}</p>
        </div>
    )
}

export default Movie;