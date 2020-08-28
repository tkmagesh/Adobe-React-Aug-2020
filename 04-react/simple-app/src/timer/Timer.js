import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toTimeString());
    useEffect(() => {
        //this function will be executed whenever the component is mounted/updated
        console.log('component is mounted')
        const timerId = setInterval(() => setCurrentTime(new Date().toTimeString()), 1000);

        return () => {
            //this function will be executed whenever the component is unmounted
            console.log('component is unmounted');
            if (timerId) clearInterval(timerId);
        }
    },[] /*empty array will make the function execute only when the component is mounted*/ );
    return (<div>{currentTime}</div>)
}

export default Timer;

