import { Component } from "react";

export const withFetch = (url, initData, WrappedComponent) => {
	// WrappedComponent = AllPost
	class WrapperComponent extends Component {
		state = {
			isLoading: true,
			data: initData,
			errorMessage: "",
		};
		// life cycle methods
		componentDidMount() {
			console.log("did mount");
			fetch(url)
				.then((res) => res.json())
				.then((result) => {
					this.setState({
						...this.state,
						isLoading: false,
						data: result,
						errorMessage: "",
					});
				})
				.catch((err) => {
					this.setState({
						...this.state,
						isLoading: false,
						errorMessage: err.message,
						data: initData,
					});
				});
		}
		render() {
			const { isLoading, data, errorMessage } = this.state;
			return (
				<WrappedComponent
					isLoading={isLoading}
					errorMessage={errorMessage}
					data={data}
				/>
			);
		}
	}

	return WrapperComponent;
};
