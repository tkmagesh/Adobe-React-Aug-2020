import React from 'react';
import BugItem from './BugItem';
const BugList = ({bugs}) => {
    const bugItems = bugs.map((bug, index) => (
        <BugItem key={index} bug={bug} />
    ));
    return(
        <section className="list">
            <ol id="bugList">
                {bugItems}
            </ol>
            <input type="button" value="Remove Closed" />
        </section>
    )
}

export default BugList;