import React from "react";
import BearFishing from "../assets/lottie/84178-404-error.json";
import Lottie from "lottie-react"
import Heading from "../components/Heading";
import styled from "styled-components";
const StyledDiv = styled.div`
padding-top: 10em;

`
const StyledH3 = styled.h3`
padding:2em;
`
const ErrorView = () => {
    return (
        <div>
            <Heading title="MyMovies" size="16" as="h1" />
            <StyledDiv>
                <Lottie animationData={BearFishing} height={400} />
                <StyledH3>An error has occured! Bear has gone fishing for a solution.</StyledH3>
            </StyledDiv >
        </div>
    )
}

export default ErrorView;