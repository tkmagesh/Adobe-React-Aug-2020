import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import bugActions from '../actions';

const BugEdit = () => {
    const dispatch = useDispatch();
    const [newBugName, setNewBugName] = useState('');

    const onAddNewClick = () => {
        const addNewAction = bugActions.addNew(newBugName);
        dispatch(addNewAction);
    }

    return(
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" value={newBugName} onChange={evt => setNewBugName(evt.target.value)} />
            <input type="button" value="Add New" onClick={onAddNewClick} />
        </section>
    )
}

export default BugEdit;