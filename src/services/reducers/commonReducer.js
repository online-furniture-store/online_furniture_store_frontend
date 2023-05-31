import { TEST } from '../actions/actionTypes';

const initialState = {
	test: '',
};

export default function commonReducer(state = initialState, action) {
	switch (action.type) {
		case TEST:
			return {
				...state,
				test: action.payload,
			};
		default:
			return state;
	}
}
