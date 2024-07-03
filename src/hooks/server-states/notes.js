/* eslint-disable no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAllNotes = () => {
	const {
		isFetching,
		isError,
		error,
		data: notes,
	} = useQuery({
		queryKey: ["notes"],
		queryFn: () =>
			fetch(`http://localhost:3000/notes`).then((res) => res.json()),
	});

	return {
		isFetching,
		isError,
		error,
		notes,
	};
};

export const useCreateNote = () => {
	const client = useQueryClient();
	return useMutation({
		mutationFn: (newNote) =>
			fetch(`http://localhost:3000/notes`, {
				method: "POST",
				body: JSON.stringify(newNote),
				headers: {
					"Content-type": "application/json",
				},
			}),
		onSuccess: () => {
			client.invalidateQueries("notes");
		},
	});
};

export const useRemoveNote = () => {
	const client = useQueryClient();

	return useMutation({
		mutationFn: (noteId) =>
			fetch(`http://localhost:3000/notes/${noteId}`, {
				method: "DELETE",
			}),
		onMutate: async (noteId) => {
			await client.cancelQueries({ queryKey: ["notes"] });
			const prevNotes = client.getQueryData(["notes"]);
			client.setQueryData(["notes"], (oldData) =>
				oldData.filter((item) => item.id !== noteId),
			);
			return { prevNotes };
		},
		onError: (_err, noteId, context) => {
			client.setQueryData(["notes"], context.prevNotes);
		},

		onSettled: () => {
			client.invalidateQueries(["notes"]);
		},
	});
};

export const useUpdateNote = () => {
	const client = useQueryClient();
	return useMutation({
		mutationFn: (note) =>
			fetch(`http://localhost:3000/notes/${note.id}`, {
				method: "PUT",
				body: JSON.stringify(note),
				headers: {
					"Content-type": "application/json",
				},
			}),
		onMutate: async (note) => {
			await client.cancelQueries({ queryKey: ["notes"] });
			const prevNotes = client.getQueryData(["notes"]);
			client.setQueryData(["notes"], (oldData) => {
				return oldData.map((item) => {
					if (item.id === note.id) {
						return note;
					}
					return item;
				});
			});

			return { prevNotes };
		},

		onError: (_err, _note, context) => {
			client.setQueryData(["notes"], context.prevNotes);
		},

		onSettled: () => {
			client.invalidateQueries("notes");
		},
	});
};
