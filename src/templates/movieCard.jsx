import styled from "styled-components";
import Heading from "../components/Heading";
import Image from "../components/Image";
import MovieRating from "../components/MovieRating";

const StyledArticle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em 1em 0em 0em;

`
const MovieCard = () => {
    return (
        <StyledArticle>
            <figure>
                <Image shadow={true} />
                <Heading title="Venom Let There be Carnage" size="14" as="h3" />
                <MovieRating />
            </figure>
        </StyledArticle>
    );
};

export default MovieCard;