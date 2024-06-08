import { useSelector, useDispatch } from "react-redux";

const CounterApp = () => {
	const counter = useSelector((storeState) => storeState.counter);
	const dispatch = useDispatch();
	// console.log(janiNah, "janiNah");
	return (
		<div>
			<p>The value of the counter is {counter}</p>
			<button
				onClick={() =>
					dispatch({ type: "counter/incremented", payload: 1 })
				}
			>
				Increase By 1
			</button>
			<button
				onClick={() => dispatch({ type: "decremented", payload: 1 })}
			>
				Decrease By 1
			</button>
			<button
				onClick={() =>
					dispatch({ type: "counter/incremented", payload: 5 })
				}
			>
				Increase By 5
			</button>
			<button
				onClick={() => dispatch({ type: "decremented", payload: 3 })}
			>
				Decrease By 3
			</button>
		</div>
	);
};

export default CounterApp;
