import styled from "styled-components";
import Heading from "../components/Heading";
import Button from "../components/SeeMoreButton";
import dummyimage from "../assets/moviecover.png";
import Actor from "../components/Actors";

const NewLine = styled.div`
  flex-basis: 100%;
  height: 1rem;
`;

const ActorDiv = styled.div`
display:flex;
flex-direction:row;
`
const InfoDiv = styled.div`
display:flex;
flex-direction:row;
gap: 68%;
`

const MovieCast = () => {
    return (
        <section>
            <div>
                <InfoDiv>
                    <Heading title="Cast" size="16" as="h2" />
                    <Button title="See More" />
                </InfoDiv>
                <NewLine />
                <ActorDiv>
                    <Actor imgsrc={dummyimage} />
                    <Actor imgsrc={dummyimage} />
                    <Actor imgsrc={dummyimage} />
                    <Actor imgsrc={dummyimage} />
                </ActorDiv>
            </div>
        </section>
    );
};

export default MovieCast;