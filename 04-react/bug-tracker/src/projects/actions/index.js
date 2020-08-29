import axios from 'axios';
const serviceEndPoint = 'http://localhost:3030/projects';

const load = () => {
    return async (dispatch) => {
        const response = await axios.get(serviceEndPoint);
        const projects = response.data;
        const action = { type: 'INIT_PROJECTS', payload: projects};
        dispatch(action);
    }
}

const addNew = (projectName) => {
    return async (dispatch) => {
        const newProjectData = { id : 0, name : projectName };
        const response = await axios.post(serviceEndPoint, newProjectData);
        const newProject = response.data;
        const action = { type : 'ADD_PROJECT', payload: newProject };
        dispatch(action);
    }
}

export default { load, addNew };