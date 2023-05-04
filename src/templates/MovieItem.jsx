import styled from "styled-components";
import Heading from "../components/Heading";
import Rating from "../components/MovieRating";
import Image from "../components/Image";
import Label from "../components/Label";
import Time from "../components/Time";
import MovieRating from "../components/MovieRating";
import coverimage from "../assets/moviecover.png";

const StyledArticle = styled.article`
  display: flex;
  gap: 1rem;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 8px;
`;
const MovieItem = () => {
    return (
        <StyledArticle>
            <Image src={coverimage} width="85" height="120" />
            <StyledSection>
                <Heading title="Venom Let There Be Carnage" size="14" as="h3" />
                <MovieRating />
                <StyledDiv>
                    <Label title="horror" />
                    <Label title="thriller" />
                    <Label title="documentary" />
                </StyledDiv>
                <Time />
            </StyledSection>
        </StyledArticle>
    );
};

export default MovieItem;