import { MenuItem, Select } from "@suid/material";
import { createSignal } from "solid-js";
import { getAttribute, setAttribute, setters } from "../../api/dataStore";

import "../../styles/Choice.css";

const PreloadChoice = () => {
    // makes element reactive
    const [getPreload, setPreload] = createSignal(
        getAttribute("preload") || "None"
    );

    // updates attribute and local storage
    const handleChange = (event) => {
        // updates reactive attribute
        setPreload(event.target.value);

        // updates local storage
        setAttribute("preload", event.target.value);
    };

    // adds setter to registry
    setters["preload"] = [ setPreload, "None" ];

    return (
        <div class="choice">
            <h3>Preload:</h3>
            <div class="choiceContainer">
                <Select
                    value={getPreload()}
                    label="Preload"
                    onChange={handleChange}
                    sx={{
                        color: "white"
                    }}
                >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="Cone">Cone</MenuItem>
                    <MenuItem value="Cube">Cube</MenuItem>
                </Select>
            </div>
        </div>
    );
}

export default PreloadChoice;
