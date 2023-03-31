import { Fab } from "@suid/material";
import DeleteIcon from "@suid/icons-material/Delete";

import "../styles/ClearButton.css"
import { setters } from "../api/dataStore";

// clears all choices
const clearChoices = () => {
    // clears local storage
    window.localStorage.clear();

    // iterates through all property setters and calls them
    Object.values(setters).forEach(setter => {
        // calls setter with default value
        setter[0](setter[1]);
    });
};

const ClearButton = () => {
    return (
        <div class="clearButton">
            <Fab
                onClick={clearChoices}
                sx={{
                    backgroundColor: "#1976d2"
                }}
            >
                <DeleteIcon />
            </Fab>
        </div>
    );
};

export default ClearButton;
