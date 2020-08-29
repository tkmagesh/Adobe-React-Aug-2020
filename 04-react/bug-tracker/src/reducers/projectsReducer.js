function projectsReducer(currentState = [], action){
    switch (action.type) {
        case 'INIT_PROJECTS':
            return action.payload;
            break;
        case 'ADD_PROJECT':
            return [...currentState, action.payload];
        default:
            break;
    }
    return currentState;
}
export default projectsReducer;