import React from 'react';
import { useDispatch } from 'react-redux';
import bugActions from '../actions';
import { Link } from 'react-router-dom';

const BugItem = ({bug}) => {
    const dispatch = useDispatch();
    const onBugNameClick = (bug) => {
        const updateBugAction = bugActions.toggle(bug);
        dispatch(updateBugAction);
    }

    const onRemoveClick = (bug) => {
        const removeBugAction = bugActions.remove(bug);
        dispatch(removeBugAction);
    }
    const bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');

    return(
        <li>
            <div className={bugStyle}
                onClick={() => onBugNameClick(bug)}>
                {bug.name}
            </div>
            <div className="datetime">
                {bug.createdAt}
            </div>
            <input type="button" value="Remove" onClick={() => onRemoveClick(bug)} />
            <div> <Link to={'/bugs/' + bug.id}>More...</Link> </div>
        </li>
    )
}

export default BugItem;