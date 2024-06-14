import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ListOfPosts from "../components/ListOfPosts";
import { fetchPosts } from "../store/api-services/post";

const PostList = () => {
	const { posts, isLoading, errorMessage } = useSelector(
		(storeState) => storeState.post,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts);
	}, []);
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
