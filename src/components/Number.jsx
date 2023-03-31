import { createSignal } from "solid-js";
import { Button } from "@suid/material";
import AddIcon from "@suid/icons-material/Add";
import RemoveIcon from "@suid/icons-material/Remove";
import { getAttribute, setAttribute, setters } from "../api/dataStore";

import "../styles/Number.css";

const Number = (props) => {
    // makes number reactive
    const [ getCount, setCount ] = createSignal(
        getAttribute(props.key) || 0
    );

    // adds setter function to registry
    setters[props.key] = [ setCount, 0 ];

    // increments count by 1
    const increment = () => {
        // checks if count is within limits
        if (getCount() < props.max) {
            // increments count
            setCount(getCount() + 1);

            // updates local storage
            setAttribute(props.key, getCount());
        }
    };

    // decrements count by 1
    const decrement = () => {
        // checks if count is within limits
        if (getCount() > 0) {
            // increments count
            setCount(getCount() - 1);

            // updates local storage
            setAttribute(props.key, getCount());
        }
    };

    return (
        <div class="numberContainer">
            <h2>{props.label}</h2>
            <div class="numberContainerFlex">
                <div class="number">
                    <Button
                        disableElevation
                        variant="contained"
                        onClick={increment}
                        sx={{
                            borderRadius: "5px 5px 0px 0px"
                        }}
                    >
                        <AddIcon />
                    </Button>
                    <p>{getCount()}</p>
                    <Button
                        disableElevation
                        variant="contained"
                        onClick={decrement}
                        sx={{
                            borderRadius: "0px 0px 5px 5px"
                        }}
                    >
                        <RemoveIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Number;
