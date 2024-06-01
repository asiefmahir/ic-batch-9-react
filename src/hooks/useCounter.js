import { useState } from "react";

export const useCounter = () => {
	const [counter, setCounter] = useState(0);
	const increaseHandler = (value) => {
		setCounter(counter + value);
	};
	const decreaseHandler = (value) => {
		setCounter(counter - value);
	};

	return {
		counter,
		increaseHandler,
		decreaseHandler,
	};
};
