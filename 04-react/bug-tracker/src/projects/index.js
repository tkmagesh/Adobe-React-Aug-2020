import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import projectActions from './actions';

const Projects = () => {
    const [newProjectName, setNewProjectName] = useState('');
    const dispatch = useDispatch();
    const projectsList = useSelector(storeState => storeState.projectsData);

    useEffect(() => {
        dispatch(projectActions.load());
    },[dispatch]);

    const onAddNewClick = () => {
        dispatch(projectActions.addNew(newProjectName));
    }
    return (
        <div>
            <h3>Products</h3>
            <hr/>
            <label htmlFor="">Project Name :</label>
            <input type="text" value={newProjectName} onChange={evt => setNewProjectName(evt.target.value)}/>
            <input type="button" value="Add New" onClick={onAddNewClick}/>
            <ol>
                { projectsList.map((project, idx) => (
                    <li key={idx}>
                        <div>{project.name}</div>
                    </li>)) 
                }
            </ol>
        </div>
    )
}

export default Projects;