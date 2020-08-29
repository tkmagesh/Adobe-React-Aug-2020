function bugsReducer(currentState = [], action) {
    switch (action.type) {
        case 'INIT_BUGS':
            return action.payload;
        case 'ADD_NEW_BUG':
            return [...currentState, action.payload];
        case 'UPDATE_BUG':
            return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
        case 'REMOVE_BUG':
            return currentState.filter(bug => bug.id !== action.payload.id);
        default:
            return currentState;
    }
}
export default bugsReducer;