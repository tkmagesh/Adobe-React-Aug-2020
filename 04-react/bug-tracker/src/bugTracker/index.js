import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import bugActions from './actions';
import BugStats from './components/BugStats';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';

const BugTracker = () => {
    const dispatch = useDispatch();
    const bugs = useSelector(state => state.bugsData);
    
    useEffect(() => {
        const loadAction = bugActions.load();
        dispatch(loadAction);
    }, []);
    
    return (
        <div>
            <h3>Bugs</h3>
            <hr />
            <BugStats bugs={bugs} />
            <BugEdit/>
            <BugList bugs={bugs}/>
        </div>
    )
}

export default BugTracker;