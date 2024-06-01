import { useCounter } from "../hooks/useCounter";

const CounterApp = () => {
	const { counter, increaseHandler, decreaseHandler } = useCounter();
	return (
		<div>
			<p>The value of the counter is {counter}</p>
			<button onClick={() => increaseHandler(1)}>Increase By 1</button>
			<button onClick={() => increaseHandler(5)}>Increase By 5</button>

			<button onClick={() => decreaseHandler(1)}>decrease By 1</button>
			<button onClick={() => decreaseHandler(3)}>decrease By 3</button>
		</div>
	);
};

export default CounterApp;
