const initialState = { 
    bugs : [], 
    currentBug : {}
}
function bugsReducer(currentState = initialState, action) {
    switch (action.type) {
        case 'INIT_BUGS':
            return { ...currentState, bugs : action.payload };
        case 'ADD_NEW_BUG':
            return {...currentState, bugs : [...currentState.bugs, action.payload]};
        case 'UPDATE_BUG':
            return {...currentState, bugs : currentState.bugs.map(bug => bug.id === action.payload.id ? action.payload : bug)};
        case 'REMOVE_BUG':
            return {...currentState, bugs : currentState.bugs.filter(bug => bug.id !== action.payload.id)};
        case 'SET_CURRENT_BUG':
            return {...currentState, currentBug : action.payload }
        default:
            return currentState;
    }
}
export default bugsReducer;