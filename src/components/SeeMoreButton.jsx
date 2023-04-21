import styled from "styled-components";

const Button = styled.button`
    border-radius: 25px;
    height: 2em;
    border: 1px solid;
    border-color: #AAA9B1;
    background-color: white;
    color: #AAA9B1;
    font-size: 0.8em;
`
const SeeMoreButton = () => {
    return <Button>See more</Button>;
};

export default SeeMoreButton;