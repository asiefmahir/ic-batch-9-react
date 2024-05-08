import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import StudentProvider from "./contexts/Student.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StudentProvider>
		<App />
	</StudentProvider>,
);

{
	/* <div>
	<div>Hello World</div>
</div>; */
}

{
	/* <div>
	<h1>Hello</h1>
</div>; */
}
{
	/* <img  />
<h1></h1> */
}
