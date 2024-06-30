/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
	useGetAllNotesQuery,
	useCreateNoteMutation,
	useRemoveNoteMutation,
} from "../store/features/notes/noteApi";

const NoteList = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const { isFetching, isError, error, data: notes } = useGetAllNotesQuery();
	const [addNote] = useCreateNoteMutation();
	const [deleteNote] = useRemoveNoteMutation();

	const submitHandler = (e) => {
		e.preventDefault();
		const newNote = {
			title: noteTitle,
		};
		addNote(newNote);
		setNoteTitle("");
	};

	const removeHandler = (id) => {
		deleteNote(id);
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={noteTitle}
					onChange={(e) => setNoteTitle(e.target.value)}
				/>
			</form>
			<ul>
				{notes?.map((note) => (
					<li key={note.id}>
						<span>{note.title}</span>
						<button onClick={() => removeHandler(note.id)}>
							Remove Note
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NoteList;
