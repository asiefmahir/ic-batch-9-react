"use client";
// only client!! NOT

import { useState } from "react";

const TodoList = () => {
	console.log("I am todo page");
	const [todoTitle, setTodoTitle] = useState("");
	return (
		<div>
			<form>
				<input type="text" value={todoTitle} />
				<button type="submit">Create Todo</button>
			</form>
		</div>
	);
};

export default TodoList;
