import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ListOfPosts from "../components/ListOfPosts";

const PostList = () => {
	const {
		data: posts,
		isLoading,
		errorMessage,
	} = useFetch([], `https://jsonplaceholder.typicode.com/posts?_limit=5`);
	return (
		<div>
			<h2>All Posts</h2>
			{isLoading && <h1>Loading Data.......</h1>}
			{errorMessage && (
				<p>Some Error Occurred. try to navigate to the other pages</p>
			)}
			<ListOfPosts posts={posts} />
		</div>
	);
};

export default PostList;
