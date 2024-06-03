/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import Demo from "./Demo";

const Title = memo(() => {
	console.log("Title Component rendering");
	return (
		<>
			<h2>Our Counter App</h2>
			<Demo />
		</>
	);
});

export default Title;
