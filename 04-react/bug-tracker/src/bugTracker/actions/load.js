import bugApi from '../services/bugApi';

function load() {
    //Async 
    /* return function(dispatch){
      const p = bugApi.getAll()
      p.then(function(bugs){
        const action = { type: 'INIT_BUGS', payload: bugs };
        dispatch(action);
      });
    } */

    //using async await
    return async function (dispatch) {
        const bugs = await bugApi.getAll();
        const action = { type: 'INIT_BUGS', payload: bugs };
        dispatch(action);
    }

    //Sync
    /* 
    const bugs = getLocalBugs();
    const action = { type: 'INIT_BUGS', payload: bugs };
    return action;  
    */
}

export default load;