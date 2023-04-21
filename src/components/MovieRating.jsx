import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const MovieRating = () => {
    return (
        <div className="ratingContainer">
            <FaStar color="#FFC319" />
            <p>9.1/10 IMDb</p>
        </div>
    );
};

export default MovieRating;