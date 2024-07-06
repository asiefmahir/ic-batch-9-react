/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { withFetch } from "../hoc/withFetch";

class AllPostWithClass extends Component {
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.errorMessage !== this.state.errorMessage) {
	// 		console.log("did update", prevState, prevProps);
	// 	}
	// }

	// componentWillUnmount() {}
	// re render
	render() {
		console.log("render");
		const { isLoading, data: posts, errorMessage } = this.props;
		return (
			<div>
				<h2>All Posts</h2>
				{isLoading && <h3>Loading....</h3>}
				{errorMessage && <p>{errorMessage}</p>}
				<ul>
					{posts.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default withFetch(
	`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	[],
	AllPostWithClass,
);
