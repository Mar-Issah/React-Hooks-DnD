import "./App.css";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Header from "./components/Header";

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<Header />
		</DndProvider>
	);
}

export default App;
