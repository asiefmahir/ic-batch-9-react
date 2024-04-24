import { useState } from "react";

import "./App.css";

function App() {
	const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([
		{ id: "1", title: "Note 1" },
		{ id: "2", title: "Note 2" },
		{ id: "3", title: "Note 3" },
	]);

	const submitHandler = (event) => {
		event.preventDefault();
		if (noteTitle.trim() === "") return alert("Please enter valid a title");
		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};
		// notes.push(newNote);
		// notes[1].title = "abc"
		// noteTitle = ""
		setNotes([...notes, newNote]);
		// notes = [newNote, ...notes]
		setNoteTitle("");
		// noteTitle = ""
	};

	const removeHandler = (noteId) => {
		// noteId === "3"
		// notes.splice()
		//updatedNotes = [{ id: "1", title: "Note 1" }, { id: "2", title: "Note 2" }]
		const updatedNotes = notes.filter((note) => note.id !== noteId);
		//          ({ id: "1", title: "Note 1" }) => "1" !== "3"
		//          ({ id: "2", title: "Note 2" }) => "2" !== "3"
		//			({ id: "3", title: "Note 3" })  => "3" !== "3"
		console.log(updatedNotes);

		setNotes(updatedNotes);
		// notes = updatedNotes
	};

	// const changeTitleHandler = (event) => {
	// 	console.log(event.target);
	// 	// noteTitle = event.target.value;
	// 	setNoteTitle(event.target.value);
	// 	// noteTitle = event.target.value;
	// };

	return (
		<div className="App">
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={noteTitle}
					onChange={(event) => {
						setNoteTitle(event.target.value);
						// noteTitle = event.target.value;
					}}
				/>
				<button type="submit">Add Note</button>
			</form>
			<ul>
				{notes.map((note) => (
					<li className="note-item" key={note.id}>
						<span>{note.title}</span>
						<button>Edit</button>
						<button onClick={() => removeHandler(note.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

// const increaseHandler = (event) => {};

// document.getElementsByClassName("App").addEventListener(increaseHandler);
// p.innerText = counter;

// section, div

// App()

/**
 * 3 condition to be a component:
 *    1) A Component must be a function
 *    2) That function should return "something"
 *    3) That "something" should be some html-ish code (JSX)
 */

export default App;
