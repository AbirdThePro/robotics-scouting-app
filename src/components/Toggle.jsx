import { Checkbox } from "@suid/material";
import { createSignal } from "solid-js";
import { getAttribute, setAttribute, setters } from "../api/dataStore";

import "../styles/Toggle.css";

const Toggle = (props) => {
    // makes element reactive
    const [ getChecked, setChecked ] = createSignal(
        getAttribute(props.key) || false
    );

    // updates attribute and local storage
    const updateChecked = (event, value) => {
        // updates component data
        setChecked(value);

        // updates local storage
        setAttribute(props.key, getChecked());
    }

    // adds setter to registry
    setters[props.key] = [ setChecked, false ];

    return (
        <div class="toggle">
            <h2>{props.label}</h2>
            <Checkbox
                checked={getChecked()}
                onChange={updateChecked}
                sx={{
                    color: "#1976d2"
                }}
            />
        </div>
    );
};

export default Toggle;
