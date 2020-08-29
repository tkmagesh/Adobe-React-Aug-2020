import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BugDetails = () => {
    const bugs = useSelector(storeState => storeState.bugsData);
    const { id } = useParams();
    const bug = bugs.find(bug => bug.id === parseInt(id));
    return(
        <div>
            <h3>{bug.name}</h3>
            <p>{bug.createdAt}</p>
        </div>
    )
};

export default BugDetails;