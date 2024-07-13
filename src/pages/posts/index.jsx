const Posts = ({ posts }) => {
	return (
		<div>
			<h2>All Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

export async function getStaticProps() {
	console.log("GetStaticProps from Posts page");
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=5",
	);
	const posts = await res.json();
	return { props: { posts } };
}

export default Posts;
