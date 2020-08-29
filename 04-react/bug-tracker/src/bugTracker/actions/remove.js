import bugApi from '../services/bugApi';
function remove(bugToRemove) {
    return async function (dispatch) {
        await bugApi.remove(bugToRemove);
        const action = { type: 'REMOVE_BUG', payload: bugToRemove };
        dispatch(action);
    }
}
export default remove;