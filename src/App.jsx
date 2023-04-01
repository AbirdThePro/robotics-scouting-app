import ClearButton from "./components/ClearButton";
import Auto from "./components/sections/Auto";
import Tele from "./components/sections/Tele";
import Prematch from "./components/sections/Prematch";
import Endgame from "./components/sections/Endgame";
import DataDisplay from "./components/DataDisplay";
import { Button } from "@suid/material";

const App = () => {
	return (
		<main>
			<Prematch />
			<Auto />
			<Tele />
			<Endgame />
			<DataDisplay />
			<ClearButton />
		</main>
	);
};

export default App;
