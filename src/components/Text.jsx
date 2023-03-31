import { createSignal } from "solid-js";
import { TextField } from "@suid/material";
import { getAttribute, setAttribute, setters } from "../api/dataStore";

import "../styles/Text.css";

// regexs for input validation
const TEXT_FILTER = new RegExp("[(a-z)(A-Z)(0-9) .]", "g");
const NUMBER_FILTER = new RegExp("[(0-9)]", "g");

// validates given input and removes special characters
const validateInput = (input, type, maxLength) => {
    // stores result
    let result;

    // removes extra characters
    result = input.slice(0, maxLength);

    // stores chracter array
    let charArr;

    // checks input type
    if (type === "text") {
        // uses text regex
        charArr = [...result.matchAll(TEXT_FILTER)];
    }
    else if (type === "number") {
        // uses number regex
        charArr = [...result.matchAll(NUMBER_FILTER)];
    }

    // joins character array into final result
    result = charArr.join("");

    // returns filtered result
    return result;
}

const Text = (props) => {
    // makes number reactive
    const [ getText, setText ] = createSignal(
        getAttribute(props.key) || ""
    );

    // adds setter function to registry
    setters[props.key] = [ setText, "" ];

    // updates text
    const updateText = (event, value) => {
        // changes reactive variable
        setText(validateInput(value, props.type || "text", props.max));

        // updates local storage
        setAttribute(props.key, getText());
    };

    return (
        <div class="text">
            <TextField
                label={props.label}
                value={getText()}
                variant="filled"
                onChange={updateText}
                sx={{
                    color: "blue",
                }}
                inputProps={{
                    style: {
                        color: "white"
                    }
                }}
                InputLabelProps={{
                    style: {
                        color: "#1976d2",
                        "font-size": "18px"
                    }
                }}
            />
        </div>
    );
};

export default Text;
