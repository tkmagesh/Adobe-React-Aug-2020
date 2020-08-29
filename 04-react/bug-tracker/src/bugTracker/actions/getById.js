import bugApi from '../services/bugApi';

function getById(id) {
    //using async await
    return async function (dispatch) {
        const bug = await bugApi.getById(id);
        const action = { type: 'SET_CURRENT_BUG', payload: bug };
        dispatch(action);
    }
}

export default getById;