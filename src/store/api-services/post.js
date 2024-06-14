export const fetchPosts = (dispatch) => {
	fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
		.then((res) => res.json())
		.then((data) => {
			dispatch({ type: "post/fetchSucceeded", payload: data });
		});
};
