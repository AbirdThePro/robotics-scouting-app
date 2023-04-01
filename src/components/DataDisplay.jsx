import qrcode from "qrcode-generator-es6";

import { getData, setters } from "../api/dataStore";
import { Button } from "@suid/material";
import ContentCopyIcon from "@suid/icons-material/ContentCopy";

import "../styles/DataDisplay.css";

// gets all data and displays QR code
const updateCode = () => {
    // gets data
    let data = getData();

    // creates QR code generator object
    const qr = new qrcode(0, "H");

    // sends data to QR code object
    qr.addData(JSON.stringify(data));

    // generates QR code
    qr.make();

    // adds QR code to document
    document.querySelector("#qrcode").innerHTML = qr.createSvgTag({ });
};

// copies raw JSON data to clipboard
const copyRawData = async () => {
    // checks if clipboard API is supported
    if (!navigator.clipboard) {
        // if not, display error message and exit
        alert("Your browser doesn't support the clipboard API :(");
        return;
    }

    // gets data
    let data = getData();

    // copies data to clipboard
    await navigator.clipboard.writeText(JSON.stringify(data));

    // tells user that data was copied
    alert("Data successfully copied!");
};

const DataDisplay = () => {
    return (
        <div class="dataDisplay">
            <Button variant="contained" onClick={updateCode}>Generate QR Code</Button>
            <Button variant="contained" onClick={copyRawData}>
                <ContentCopyIcon />
            </Button>
            <div id="qrcode" />
        </div>
    );
};

export default DataDisplay;
