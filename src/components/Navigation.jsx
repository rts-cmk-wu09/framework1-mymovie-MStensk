import styled from "styled-components";
import { FaRegBookmark } from "react-icons/fa";
import { TfiTicket } from "react-icons/tfi";
import { FcFilmReel } from "react-icons/fc";

const StyledNav = styled.nav`
  position: fixed;
  bottom: -10px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background-color: #fff;
  font-size: 1.4rem;
  color: #979797;
  box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 0.2);
`;

const Navigation = () => {
    return (
        <StyledNav>
            <FcFilmReel />
            <TfiTicket />
            <FaRegBookmark />
        </StyledNav>
    );
};

export default Navigation;