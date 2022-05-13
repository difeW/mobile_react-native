export const authReducer = (state, action) => {
    const {
        type,
        payload: { user }
    } = action

    switch (type) {
        case 'SET_AUTH':
            return {
                ...state,
                user
            }

        default:
            return state
    }
}