import bugApi from '../services/bugApi';

function toggle(bugToToggle) {
    return async function (dispatch) {
        bugToToggle.isClosed = !bugToToggle.isClosed;
        const toggledBug = await bugApi.save(bugToToggle);
        const action = { type: 'UPDATE_BUG', payload: toggledBug };
        dispatch(action);
    }
}
export default toggle;