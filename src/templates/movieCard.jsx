import styled from "styled-components";
import HeadingOne from "../components/HeadingOne";
import Image from "../components/Image";
import HeadingThree from "../components/HeadingThree";
import MovieRating from "../components/MovieRating";
const MovieCard = () => {
    return (
        <article>
            <figure>
                <Image />
                <HeadingThree />
                <MovieRating />
            </figure>
        </article>
    );
};

export default MovieCard;