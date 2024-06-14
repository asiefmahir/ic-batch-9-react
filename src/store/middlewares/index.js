/* eslint-disable no-unused-vars */
export const ourMiddleWare = (store) => (next) => (action) => {
	if (typeof action === "function") {
		action(store.dispatch); // fetchUsers()
		return;
		// fetchPosts(store.dispatch)
	}

	next(action);

	// if ()
	// action.payload = action.payload * 100;
	// next(action);
};

// thunk
