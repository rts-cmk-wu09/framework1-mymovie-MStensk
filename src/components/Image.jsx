import coverimage from "../assets/moviecover.png";
import styled from "styled-components";
const StyledImg = styled.img`
  border-radius: 5px;
  box-shadow: 2px 6px 10px 0px #00000054;
`
const Image = () => {
    return <StyledImg src={coverimage} alt="blablabla" />;
};
export default Image;