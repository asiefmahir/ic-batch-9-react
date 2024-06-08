/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ListOfPosts = ({ posts }) => {
	return (
		<ul>
			{posts.map((post) => (
				<li key={post.id}>
					<Link to={`/posts/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default ListOfPosts;
