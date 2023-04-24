import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StyledFaStar = styled(FaStar)`
color: #FFC319;
`;

const StyledDiv = styled.div`
display:block;
`;

const MovieRating = () => {
    return (
        <StyledDiv>
            <StyledFaStar />
            <p>9.1/10 IMDb</p>
        </StyledDiv>
    );
};

export default MovieRating;