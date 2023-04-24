import styled from "styled-components";

const Heading = ({ text, size, type, weight }) => {
    const StyledHeading = styled(type)`
    font-size: ${size};
    font-weight:${weight};
    color: black;
`

    return <StyledHeading>{text}</StyledHeading>;
};

export default Heading;