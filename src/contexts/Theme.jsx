/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [bgColor, setBgColor] = useState("#fff");
	const [textColor, setTextColor] = useState("#000");

	const ctxValue = {
		bgColor,
		setBgColor,
		textColor,
		setTextColor,
	};
	return (
		<ThemeContext.Provider value={ctxValue}>
			{children}
		</ThemeContext.Provider>
	);
};
export default ThemeProvider;
