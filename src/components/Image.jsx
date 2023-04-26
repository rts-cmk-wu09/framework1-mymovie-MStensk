import coverimage from "../assets/moviecover.png";
import styled, { css } from "styled-components";

const StyledImg = styled.img`
${(props) =>
        props.shadow &&
        css`
      box-shadow: 2px 6px 10px 0px #00000054;
    `}
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 10px;
`;

const Image = (props) => {
    return <StyledImg {...props} src={coverimage} alt="Movie_Poster" />;
};
export default Image;