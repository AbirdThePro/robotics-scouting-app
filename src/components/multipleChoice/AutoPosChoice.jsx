import { MenuItem, Select } from "@suid/material";
import { createSignal } from "solid-js";
import { getAttribute, setAttribute, setters } from "../../api/dataStore";

import "../../styles/Choice.css";

const AutoPosChoice = () => {
    // makes element reactive
    const [getAutopos, setAutopos] = createSignal(
        getAttribute("autopos") || "None"
    );

    // updates attribute and local storage
    const handleChange = (event) => {
        // updates reactive attribute
        setAutopos(event.target.value);

        // updates local storage
        setAttribute("autopos", event.target.value);
    };

    // adds setter to registry
    setters["autopos"] = [ setAutopos, "None" ];

    return (
        <div class="choice">
            <h3>Auto End Position:</h3>
            <div class="choiceContainer">
                <Select
                    value={getAutopos()}
                    label="Auto End Position"
                    onChange={handleChange}
                    sx={{
                        color: "white"
                    }}
                >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="Docked">Docked</MenuItem>
                    <MenuItem value="Engaged">Engaged</MenuItem>
                    <MenuItem value="Attempted to Dock">Attempted to Dock</MenuItem>
                    <MenuItem value="Attempted to Engage">Attempted to Engage</MenuItem>
                </Select>
            </div>
        </div>
    );
}

export default AutoPosChoice;
