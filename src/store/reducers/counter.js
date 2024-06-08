export const counterReducer = (state = 25, action) => {
	switch (action.type) {
		case "counter/incremented": {
			return state + action.payload;
		}

		case "decremented": {
			return state - action.payload;
		}

		default: {
			return state;
		}
	}
};
