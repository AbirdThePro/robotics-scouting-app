import Text from "../Text";
import Toggle from "../Toggle";
import FinalPosChoice from "../multipleChoice/FinalPosChoice";

const Endgame = () => {
    return (
        <div class="section">
            <h2>Endgame</h2>
            <FinalPosChoice />
            <Text key="notes" type="text" max="100" label="Notes" />
            <Toggle key="malfunction" label="Malfunction" />
        </div>
    );
};

export default Endgame;