import { MenuItem, Select } from "@suid/material";
import { createSignal } from "solid-js";
import { getAttribute, setAttribute, setters } from "../../api/dataStore";

import "../../styles/Choice.css";

const FinalPosChoice = () => {
    // makes element reactive
    const [ getFinalpos, setFinalpos ] = createSignal(
        getAttribute("finalpos") || "None"
    );

    // updates attribute and local storage
    const handleChange = (event) => {
        // updates reactive attribute
        setFinalpos(event.target.value);

        // updates local storage
        setAttribute("finalpos", event.target.value);
    };

    // adds setter to registry
    setters["finalpos"] = [ setFinalpos, "None" ];

    return (
        <div class="choice">
            <h2>Final Position:</h2>
            <div class="choiceContainer">
                <Select
                    value={getFinalpos()}
                    onChange={handleChange}
                    sx={{
                        color: "white"
                    }}
                >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="Parked">Parked</MenuItem>
                    <MenuItem value="Docked Solo">Docked Solo</MenuItem>
                    <MenuItem value="Engaged Solo">Engaged</MenuItem>
                    <MenuItem value="Docked Together">Docked Together</MenuItem>
                    <MenuItem value="Engaged Together">Engaged Together</MenuItem>
                </Select>
            </div>
        </div>
    );
}

export default FinalPosChoice;
