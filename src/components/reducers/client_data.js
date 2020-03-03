const initialState = {
    id: "", first_name: "", last_name: "", email: ""
};

function clientDataReducer(state = initialState, action) {
    switch (action.type) {
    case "UPDATE_CLIENT_DATA":
    return {...state, ...action.payload};
    default:
    return state;
    }
}

export default clientDataReducer;