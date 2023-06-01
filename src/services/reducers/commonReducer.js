import {
	TEST,
	INCREMENT_CART,
	GET_POSTS,
	GET_ODD_POSTS,
} from '../actions/actionTypes';

const initialState = {
	test: '',
	cartCounter: 0,
	posts: null,
	oddPosts: [],
};

export default function commonReducer(state = initialState, action) {
	switch (action.type) {
		case TEST:
			return {
				...state,
				test: action.payload,
			};
		case INCREMENT_CART:
			return {
				...state,
				cartCounter: state.cartCounter + 1,
			};
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
			};
		case GET_ODD_POSTS:
			return {
				...state,
				oddPosts: state.posts && state.posts.filter((e) => e.id % 2),
			};
		default:
			return state;
	}
}
