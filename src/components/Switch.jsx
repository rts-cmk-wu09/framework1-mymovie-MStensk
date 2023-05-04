import ReactSwitch from "react-switch"
import { useState } from "react";
import styled from "styled-components";
//import SeeMoreButton from "./SeeMoreButton";

const StyledSwitch = styled(ReactSwitch)`
grid-column-start: 3;
justify-self: end;
`

const Switch = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }
    if (checked == true) {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("#root").style.color = "white";
    }
    else {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("#root").style.color = "black";
    }

    return <StyledSwitch
        checked={checked}
        onChange={handleChange}
        offColor="#AAA9B1"
        onColor="#AAA9B1"
        onHandleColor="#000000"
        uncheckedIcon={false}
        checkedIcon={false} />

}

export default Switch;