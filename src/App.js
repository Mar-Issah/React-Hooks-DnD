import "./App.css";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import DragnDrop from "./components/DragnDrop";

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<DragnDrop />
		</DndProvider>
	);
}

export default App;
