import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [posts, setPosts] = useState([]);
	const [counter, setCounter] = useState(1);
	const [counter2, setCounter2] = useState(5);

	// posts.map(() => )
	// posts = data

	// callstack

	useEffect(() => {
		console.log("Inside side-effect");
		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
			});
	}, []);

	// JS Asynchronous Nature
	// Event loop

	// useEffect(() => {
	// 	console.log("another effect");
	// });

	console.log("Outside SideEffect");

	// console.log("some dummy console");
	return (
		<div className="App">
			<div className="counter-app">
				<h1>The value of the counter is {counter}</h1>
				<button onClick={() => setCounter(counter + 10)}>
					Increase By 10
				</button>
				<button onClick={() => setCounter(counter - 5)}>
					Decrease by 5
				</button>
			</div>
			<hr />
			<div className="counter-app">
				<h1>The value of the counter is {counter2}</h1>
				<button onClick={() => setCounter2(counter2 + 3)}>
					Increase By 3
				</button>
				<button onClick={() => setCounter2(counter2 - 1)}>
					Decrease by 1
				</button>
			</div>
			<hr />
			<h2>All Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
