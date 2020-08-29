import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import bugActions from './actions';

const BugDetails = () => {
    const bug = useSelector(storeState => storeState.bugsData.currentBug);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(bugActions.getById(id));
    },[id, dispatch])
    
    return(
        <div>
        { bug ? (<div>
        <h3>{bug.name}</h3>
        <p>{bug.createdAt}</p>
        </div >) : null}
        </div>
    )
};

export default BugDetails;