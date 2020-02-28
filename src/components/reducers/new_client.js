const initialState = {
    first_name: "", last_name: "", email: ""
};

function newClientReducer(state = initialState, action) {
    switch (action.type) {
    case "UPDATE_NEW_CLIENT_DATA":
    return {...state, ...action.payload};
    default:
    return state;
    }
}

export default newClientReducer;