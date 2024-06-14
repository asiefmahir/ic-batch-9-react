export const fetchUsers = (dispatch) => {
	dispatch({ type: "user/fetchStarted" });

	fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`)
		.then((res) => res.json())
		.then((data) => {
			dispatch({ type: "user/fetchSucceeded", payload: data });
		})
		.catch((err) => {
			dispatch({
				type: "user/fetchFailed",
				payload: err.message,
			});
		});
};
