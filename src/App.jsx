import { useState } from "react";

import "./App.css";

function App() {
	// Re-Render
	console.log("I am being invoked");
	// State Management
	// State Declaration / State Initialization
	// let a = 100;
	const [dynamicCounter, setDynamicCounter] = useState(20);
	// console.log(setDynamicCounter, "habijabi");
	// console.log(dynamicCounter, "dc");
	// dynamicCounter = dynamicCounter + 100

	const increaseHandler = () => {
		setDynamicCounter(dynamicCounter + 1);
		// setDynamicCounter === 21 + 1 === 22
		// dynamicCounter = 21
	};

	const decreaseHandler = () => {
		setDynamicCounter(dynamicCounter - 1);
	};

	// 1 time
	return (
		<div className="App">
			<nav>
				<li>hello</li>
				<li>Hello</li>
			</nav>
			<p>The value of the counter is {dynamicCounter}</p>
			<button onClick={increaseHandler}>Increase By 1</button>
			<button onClick={decreaseHandler}>Decrease By 1</button>
		</div>
	);
}
// document.getElementsByClassName("App").addEventListener(increaseHandler)
// p.innerText = counter

// section, div

// App()

/**
 * 3 condition to be a component:
 *    1) A Component must be a function
 *    2) That function should return "something"
 *    3) That "something" should be some html-ish code (JSX)
 */

export default App;
