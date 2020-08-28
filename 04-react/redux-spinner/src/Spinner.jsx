import React from 'react';
import './Spinner.css';

const Spinner = ({store}) => {
    const value = store.getState();
    const onDownClick = () => {
        const action = { type : 'DOWN' };
        store.dispatch(action);
    };
    const onUpClick = () => {
        const action = { type : 'UP' };
        store.dispatch(action);
    };
    return(
        <div>
            <h3>Spinner</h3>
            <hr/>
            <input type="button" value="DOWN" onClick={onDownClick}/>
            <span> [ {value} ] </span>
            <input type="button" value="UP" onClick={onUpClick}/>
        </div>
    )
}

export default Spinner;