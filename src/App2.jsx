import { useReducer } from "react";

// useReducer -> use Reducer -> reducer function

const counterReducer = (stateValue, action) => {
	// action can be anything -> {type: "", payload:  }
	// action.payload.price;
	// action.payload.title;
	// stateValue = 100
	// action = "ADD"

	// if (action === "ADD") {
	// 	return stateValue + 1;
	// } else if (action === "DEDUCT") {
	// 	return stateValue - 1;
	//}
	console.log(stateValue, "current State value");
	console.log(action, "Argument of Dispatch");

	switch (action.type) {
		case "ADD": {
			return stateValue + action.value;
		}
		case "DEDUCT": {
			return stateValue - action.value;
		}
		default: {
			return stateValue;
		}
	}
};

const initStateOfTheme = { bgColor: "#fff", textColor: "#000" }; // #00FFGG

initStateOfTheme.textColor = "green"; // #00FFGG

// initStateOfTheme

const themeReducer = (state, action) => {
	// {type: "CHANGE_BG_COLOR", payload: "green"}
	switch (action.type) {
		case "CHANGE_BG_COLOR": {
			return {
				...state,
				bgColor: action.payload,
			};
		}
		case "CHANGE_TEXT_COLOR": {
			return {
				...state,
				textColor: action.payload,
			};
		}

		default: {
			return state;
		}
	}
};

const App2 = () => {
	const [counter, dispatchCounterAction] = useReducer(counterReducer, 100);
	const [theme, dispatchThemeAction] = useReducer(
		themeReducer,
		initStateOfTheme,
	);

	const increaseCounter = (value) => {
		dispatchCounterAction({
			type: "ADD",
			value: value,
		});
	};

	// const handler = () => {
	//     dispatch(counter + 1)
	// }
	// counter = 205
	// const [counter, setCounter] = useState(10)
	// setCounter(101)
	// counter = 101
	return (
		<div
			style={{
				backgroundColor: theme.bgColor,
				color: theme.textColor,
			}}
		>
			<div className="theme-config">
				<div className="bg-btn-group">
					<button
						onClick={() =>
							dispatchThemeAction({
								type: "CHANGE_BG_COLOR",
								payload: "purple",
							})
						}
					>
						Change BG Color to Purple
					</button>
					<button
						onClick={() =>
							dispatchThemeAction({
								type: "CHANGE_BG_COLOR",
								payload: "yellow",
							})
						}
					>
						Change BG Color to Yellow
					</button>
					<button
						onClick={() =>
							dispatchThemeAction({
								type: "CHANGE_BG_COLOR",
								payload: "green",
							})
						}
					>
						Change BG Color to Green
					</button>
				</div>
				<hr />
				<div className="font-btn-group">
					<button
						onClick={() =>
							dispatchThemeAction({
								type: "CHANGE_TEXT_COLOR",
								payload: "tomato",
							})
						}
					>
						Change Text Color to Tomato
					</button>
					<button
						onClick={() =>
							dispatchThemeAction({
								type: "CHANGE_TEXT_COLOR",
								payload: "red",
							})
						}
					>
						Change Text Color to Red
					</button>
					<button
						onClick={() =>
							dispatchThemeAction({
								type: "CHANGE_TEXT_COLOR",
								payload: "aqua",
							})
						}
					>
						Change Text Color to Aqua
					</button>
				</div>
			</div>
			<hr />
			<div className="counter-app">
				<p>The value of the counter is {counter}</p>
				<button onClick={() => increaseCounter(1)}>
					Increase By 1
				</button>
				<button
					onClick={() =>
						dispatchCounterAction({ type: "DEDUCT", value: 1 })
					}
				>
					Decrease By 1
				</button>
				<button
					onClick={() =>
						dispatchCounterAction({ type: "ADD", value: 5 })
					}
				>
					Increase By 5
				</button>
				<button
					onClick={() =>
						dispatchCounterAction({ type: "ADD", value: 500 })
					}
				>
					Increase By 500
				</button>
				<button
					onClick={() =>
						dispatchCounterAction({ type: "ADD", value: 10 })
					}
				>
					Increase By 10
				</button>
				<button
					onClick={() =>
						dispatchCounterAction({ type: "ADD", value: 15 })
					}
				>
					Increase By 15
				</button>
			</div>
		</div>
	);
};

// dispatchCounterAction("ADD") -> counterReducer(100, "ADD") -> return an value -> React Updates the state with the returned value
export default App2;
