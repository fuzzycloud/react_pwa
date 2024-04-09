import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import reactLogo from "./assets/react.svg";
import ReloadPrompt from "./ReloadPrompt";

function baseUrl() {
	const base = import.meta.env.MODE;
	if (base === "development") {
		return "http://localhost:5137/"
	}
	return "https://fuzzycloud.github.io/react_pwa/";
}

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				Mode: {baseUrl()}
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<ReloadPrompt />
		</>
	);
}

export default App;
