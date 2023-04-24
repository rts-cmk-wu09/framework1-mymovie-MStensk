import ReactSwitch from "react-switch"
import { useState } from "react";
import styled from "styled-components";

const StyledSwitch = styled(ReactSwitch)`
grid-column-start: 3;
justify-self: end;
margin-top: 1em;
margin-right: 1.4em;
`

const Switch = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
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