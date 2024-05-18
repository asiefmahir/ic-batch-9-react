import { useState, useEffect } from "react";

import "./App.css";

function App() {
	const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);

	const getAllNotes = () => {
		fetch(`http://localhost:3000/notes`)
			.then((res) => res.json())
			.then((data) => {
				setNotes(data);
			});
	};

	useEffect(() => {
		// Get Data
		getAllNotes();
	}, []);

	const submitHandler = (event) => {
		event.preventDefault();
		if (noteTitle.trim() === "") return alert("Please enter valid a title");
		editMode === false ? createHandler() : updateHandler();
	};

	const createHandler = () => {
		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};
		// notes.push(newNote);
		// notes[1].title = "abc"
		// noteTitle = ""

		// GET -> to Get Data
		// POST -> to Create Data
		// PUT/PATCH -> to Update Data
		// DELETE -> to Delete Data
		fetch(`http://localhost:3000/notes`, {
			method: "POST",
			body: JSON.stringify(newNote),
			headers: {
				"Content-type": "application/json",
			},
		}).then(() => {
			// re-fetch
			getAllNotes();
		});

		// notes = [newNote, ...notes]
		setNoteTitle("");
		// noteTitle = ""
	};

	const removeHandler = (noteId) => {
		// noteId === "3"
		// notes.splice()
		//updatedNotes = [{ id: "1", title: "Note 1" }, { id: "2", title: "Note 2" }]
		fetch(`http://localhost:3000/notes/${noteId}`, {
			method: "DELETE",
		}).then(() => {
			getAllNotes();
		});
		//          ({ id: "1", title: "Note 1" }) => "1" !== "3"
		//          ({ id: "2", title: "Note 2" }) => "2" !== "3"
		//			({ id: "3", title: "Note 3" })  => "3" !== "3"
		// console.log(updatedNotes);

		// notes = updatedNotes
	};

	const editHandler = (note) => {
		setEditMode(true);
		setNoteTitle(note.title);
		setEditableNote(note);
	};

	const updateHandler = () => {
		const updatedNoteList = notes.map((note) => {
			if (note.id === editableNote.id) {
				return { ...note, title: noteTitle };
			}
			return note;
		});

		setNotes(updatedNoteList);
		setEditMode(false);
		setEditableNote(null);
		setNoteTitle("");
	};

	return (
		<div className="App">
			<form className={editMode ? "form" : ""} onSubmit={submitHandler}>
				<input
					type="text"
					value={noteTitle}
					onChange={(event) => {
						setNoteTitle(event.target.value);
						// noteTitle = event.target.value;
					}}
				/>
				<button type="submit">
					{editMode ? "Update Note" : "Add Note"}
				</button>
			</form>
			<ul>
				{notes.map((note) => (
					<li className="note-item" key={note.id}>
						<span>{note.title}</span>
						<button onClick={() => editHandler(note)}>Edit</button>
						<button onClick={() => removeHandler(note.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;

// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
// 	const [posts, setPosts] = useState([]);
// 	const [counter, setCounter] = useState(1);
// 	const [counter2, setCounter2] = useState(5);

// 	// posts.map(() => )
// 	// posts = data

// 	// callstack

// 	useEffect(() => {
// 		console.log("Inside side-effect");
// 		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setPosts(data);
// 			});
// 	}, []);

// 	// JS Asynchronous Nature
// 	// Event loop

// 	// useEffect(() => {
// 	// 	console.log("another effect");
// 	// });

// 	console.log("Outside SideEffect");

// 	// console.log("some dummy console");
// 	return (
// 		<div className="App">
// 			<div className="counter-app">
// 				<h1>The value of the counter is {counter}</h1>
// 				<button onClick={() => setCounter(counter + 10)}>
// 					Increase By 10
// 				</button>
// 				<button onClick={() => setCounter(counter - 5)}>
// 					Decrease by 5
// 				</button>
// 			</div>
// 			<hr />
// 			<div className="counter-app">
// 				<h1>The value of the counter is {counter2}</h1>
// 				<button onClick={() => setCounter2(counter2 + 3)}>
// 					Increase By 3
// 				</button>
// 				<button onClick={() => setCounter2(counter2 - 1)}>
// 					Decrease by 1
// 				</button>
// 			</div>
// 			<hr />
// 			<h2>All Posts</h2>
// 			<ul>
// 				{posts.map((post) => (
// 					<li key={post.id}>{post.title}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default App;
