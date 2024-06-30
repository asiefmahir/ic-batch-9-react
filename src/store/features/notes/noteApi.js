import { rootApi } from "../api/apiSlice";

export const noteApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllNotes: builder.query({
			query: () => `notes`,
			providesTags: ["notes"],
		}),
		createNote: builder.mutation({
			query: (note) => ({
				url: `notes`,
				body: note,
				method: "POST",
			}),
			invalidatesTags: ["notes"],
		}),

		removeNote: builder.mutation({
			query: (noteId) => ({
				url: `notes/${noteId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["notes"],
		}),
	}),
});

export const {
	useGetAllNotesQuery,
	useCreateNoteMutation,
	useRemoveNoteMutation,
} = noteApi;
