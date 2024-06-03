import { useState, useCallback } from "react";
import Title from "../components/Title";
import Button from "../components/Button";

const CounterApp = () => {
	console.log("Counter app Rendering");
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(7);
	const [counter3, setCounter3] = useState(10);

	const increaseHandler = useCallback(() => {
		setCounter((currVal) => currVal + 1);
	}, []); // #555ffj

	const increaseHandler2 = useCallback(() => {
		setCounter2((currVal) => currVal + 7);
	}, []); // #8899nn
	return (
		<div>
			<Title />
			<div className="counter-app-1">
				<h3>1st Counter App</h3>
				<p>The value of the counter is {counter}</p>
				<Button clickHandler={increaseHandler} />
			</div>
			<hr />
			<div className="counter-app-2">
				<h3>2nd Counter App</h3>
				<p>The value of the counter is {counter2}</p>
				<Button clickHandler={increaseHandler2} />
			</div>
			<div className="counter-app-3">
				<h3>2nd Counter App</h3>
				<p>The value of the counter is {counter3}</p>
				<button onClick={() => setCounter3(counter3 + 10)}>
					Increase By 10
				</button>
			</div>
		</div>
	);
};

export default CounterApp;
