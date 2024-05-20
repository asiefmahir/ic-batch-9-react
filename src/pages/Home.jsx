import { useState, useEffect } from "react";

function Home() {
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

export default Home;
