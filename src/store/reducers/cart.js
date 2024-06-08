/* eslint-disable no-mixed-spaces-and-tabs */
/**
 *
 * cart = [
 *      {id, title, price, description, image, quantity: quantity + 1},
 *      {id, title, price, description, image},
 *      {id, title, price, description, image},
 *
 * ]
 */

// cart[0].quantity = cart[0].quantity + 1

export const cartReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_TO_CART": {
			const product = state.find((item) => item.id === action.payload.id);
			return product
				? state.map((item) => {
						if (item.id === action.payload.id) {
							return { ...item, quantity: item.quantity + 1 };
						}
						return item;
				  })
				: [...state, { ...action.payload, quantity: 1 }];
		}
		case "REMOVE_ITEM_FROM_CART": {
			return state.filter((item) => item.id !== action.payload);
		}
		case "MODIFY_QUANTITY_OF_AN_ITEM": {
			const updatedState = state.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, quantity: action.payload.quantity };
				}
				return item;
			});

			// const nums = [1, 20, 30];÷
			// const newArr = nums.map(num => num * 2);
			return updatedState;
		}
		case "CLEAR_CART": {
			return [];
		}
		default: {
			return state;
		}
	}
};
