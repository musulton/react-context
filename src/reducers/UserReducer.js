export const SET_FIRSTNAME = "SET_FIRSTNAME";
export const SET_LASTNAME = "SET_LASTNAME";

export const onSetFirstname = (e) => ({
    type: SET_FIRSTNAME,
    payload: e.target.value
});
export const onSetLastname = (e) => ({
    type: SET_LASTNAME,
    payload: e.target.value
});

const userReducer = (state, action) => {
    switch (action.type) {
        case SET_FIRSTNAME:
            return {
                ...state,
                firstname: action.payload
            }
        case SET_LASTNAME:
            return {
                ...state,
                lastname: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
