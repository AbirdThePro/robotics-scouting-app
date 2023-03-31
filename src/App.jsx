import ClearButton from "./components/ClearButton";
import Auto from "./components/sections/Auto";
import Tele from "./components/sections/Tele";
import Prematch from "./components/sections/Prematch";
import Endgame from "./components/sections/Endgame";
import { Button } from "@suid/material";
import sendMessage from "./api/dataSend";

const App = () => {
	return (
		<main>
			<Prematch />
			<Auto />
			<Tele />
			<Endgame />
			<Button onClick={sendMessage}>Submit</Button>
			<ClearButton />
		</main>
	);
};

export default App;
