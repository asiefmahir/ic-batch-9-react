/* eslint-disable react/prop-types */
import { memo } from "react";

const Button = ({ clickHandler }) => {
	// #8899nn
	// #4422NN
	console.log("Button Component rendering");
	return <button onClick={clickHandler}>Increase By 1</button>;
};

export default memo(Button);
