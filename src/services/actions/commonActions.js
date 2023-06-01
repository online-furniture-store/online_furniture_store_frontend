import {
	TEST,
	INCREMENT_CART,
	GET_POSTS,
	GET_ODD_POSTS,
} from './actionTypes';

export const testAction = (payload) => ({
	type: TEST,
	payload,
});

export const incremenCart = () => ({
	type: INCREMENT_CART,
});

export const addPosts = (payload) => ({
	type: GET_POSTS,
	payload,
});

export const getOddPosts = () => ({
	type: GET_ODD_POSTS,
});

export const getPosts = () => (dispatch) => {
	fetch('https://jsonplaceholder.typicode.com/posts?limit')
		.then((res) => res.json())
		.then((data) => dispatch(addPosts(data)));
};
