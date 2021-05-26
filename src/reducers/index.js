const initialState = {
	error: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'API_ERROR':
			return {
				error: true
			};
		default:
			return state;
	}
}

export default reducer;