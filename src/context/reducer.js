export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER FINISHED DEVELOPING
    token: 'BQCvWAYGcBbx1Hj0BgPXv_L4G-__OdSwsAsRNRfKauydeiEiwjGVU931FmbA9lC5qYRyO7qyyFEocxKeCLvLmr5E6eGtHGF4YePRLGKCsEkJSezDm4JYb9Q-bVOSeOiOBmqGDQB3UP2UC4od2i-LleO4TKBbUTcpX47YSiEBLARJpZjz'
};

// state is how it is currently look
const reducer = (state, action) => {
 

    // action -> type, [payload]
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,   //keep what ever is present in the state
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,   //keep what ever is present in the state
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
}

export default reducer;


