import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// const someFunc = () => {
//     useState()
// }

// useState -> use State
// useReducer -> use Reducer
// useContext -> use Context

// useFetch -> use Fetch

const PostDetails = () => {
	const { postId } = useParams();

	const {
		data: post,
		isLoading,
		errorMessage,
	} = useFetch(null, `https://jsonplaceholder.typicode.com/posts/${postId}`);

	console.log(postId);

	if (isLoading === true) {
		return <h1>Loading the post details</h1>;
	}

	if (errorMessage) {
		return <p>Some error Occurred. Try to navigate the other pages</p>;
	}
	return (
		<div>
			<h2>The details of post {post.id}</h2>
			<hr />
			<h2>Title: {post.title}</h2>
			<h2>Description: {post.body}</h2>
		</div>
	);
};

export default PostDetails;
