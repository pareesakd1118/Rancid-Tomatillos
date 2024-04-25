import "./Error.css";
import React from "react";
import { useParams } from 'react-router-dom';

function Error() {
    const response = useParams().response

    return(
        <p className="error">ERROR: {response} Server down, Try again later</p>
    )
}

export default Error