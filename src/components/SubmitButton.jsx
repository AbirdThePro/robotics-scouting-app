import sendMessage from "../api/dataSend";

const SubmitButton = () => {
    // sends data to webhook
    const submitData = () => {
        sendMessage("");
    };

    return (
        <Button onClick={submitData}>Submit</Button>
    );
};

export default SubmitButton;
