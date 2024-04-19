import "./App.css";

function App() {
	const name = "mahir";
	console.log(name, "name");
	const skills = ["Js", "React", "Redux"];
	return (
		<div className="anything">
			<h2>Hello World</h2>
			<p>Again hello {name}</p>
			<ul>
				{skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</div>
	);
}
/**
 * 3 condition to be a component:
 *    1) A Component must be a function
 *    2) That function should return "something"
 *    3) That "something" should be some html-ish code (JSX)
 */

export default App;
