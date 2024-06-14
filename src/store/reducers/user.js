const initState = {
	users: [],
	isLoading: true,
	errorMessage: false,
};

export const userReducer = (state = initState, action) => {
	switch (action.type) {
		case "user/fetchStarted": {
			return {
				...state,
				isLoading: true,
			};
		}
		case "user/fetchSucceeded": {
			return {
				...state,
				users: action.payload,
				errorMessage: "",
				isLoading: false,
			};
		}

		case "user/fetchFailed": {
			return {
				...state,
				users: [],
				errorMessage: action.payload,
				isLoading: false,
			};
		}
		default: {
			return state;
		}
	}
};
