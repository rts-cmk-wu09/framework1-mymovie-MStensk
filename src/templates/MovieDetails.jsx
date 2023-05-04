import styled from "styled-components";
import Heading from "../components/Heading";
import Rating from "../components/MovieRating";
import Image from "../components/Image";
import Label from "../components/Label";
import Time from "../components/Time";
import MovieRating from "../components/MovieRating";
import MovieDesc from "../templates/MovieDesc";

import { FaRegBookmark } from "react-icons/fa";


const StyledArticle = styled.article`
background-color: white;
text-align:left;
`

const StyledFaRegBookmark = styled(FaRegBookmark)`
  align-self: center;
`;
const StyledGridSection = styled.section`
  display: grid;
  grid-template-columns: 25vw 25vw 25vw;
`;
const StyledFlexSection = styled.section`
  display: flex;
  gap: 8px;
  padding: 0.4em 0em 0.4em;
`;
const StyledP = styled.p`
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;
`;
const StyledPtag = styled.p`
  margin-top: 5px;
  font-weight: 900;
  font-size: 12px;
  color: #000;
`
const StyledDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`

const DetailedArticle = () => {
    return (
        <StyledArticle>
            <StyledDiv>
                <Heading title="Spiderman: No Way Home" size="20" as="h1" />
                <StyledFaRegBookmark />
            </StyledDiv>
            <Rating />
            <StyledFlexSection>
                <Label title="action" />
                <Label title="action" />
                <Label title="action" />
            </StyledFlexSection>
            <StyledGridSection>
                <StyledPtag>Length</StyledPtag>
                <StyledPtag>Language</StyledPtag>
                <StyledPtag>Rating</StyledPtag>
                <StyledP>Length4</StyledP>
                <StyledP>Length4</StyledP>
                <StyledP>Length4</StyledP>
            </StyledGridSection>
        </StyledArticle>

    )
}

export default DetailedArticle;