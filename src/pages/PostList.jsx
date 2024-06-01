import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

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
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
