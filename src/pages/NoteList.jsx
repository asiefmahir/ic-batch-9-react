/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
	useCreateNote,
	useGetAllNotes,
	useRemoveNote,
	useUpdateNote,
} from "../hooks/server-states/notes";

const NoteList = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const { isFetching, isError, error, notes } = useGetAllNotes();
	const createMutation = useCreateNote();
	const removeMutation = useRemoveNote();
	const updateMutation = useUpdateNote();

	const submitHandler = (e) => {
		e.preventDefault();
		const newNote = {
			title: noteTitle,
			isCompleted: false,
		};
		createMutation.mutate(newNote);
		setNoteTitle("");
	};

	const removeHandler = (id) => {
		removeMutation.mutate(id);
	};

	const updateHandler = (note) => {
		const { id, ...rest } = note;
		const updatedNode = {
			id: id,
			...rest,
			isCompleted: !note.isCompleted,
		};
		updateMutation.mutate(updatedNode);
	};

	if (isError) {
		<p>{error.message}</p>;
	}

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
						<input
							type="checkbox"
							checked={note.isCompleted}
							onChange={() => updateHandler(note)}
						/>
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
