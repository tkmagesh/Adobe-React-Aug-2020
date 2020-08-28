import  React, { useState } from 'react'
import Timer from './Timer';

const TimerContainer = () => {
    const [showTimer, setShowTimer ] = useState(true);
    return (
        <div>
            <input type="checkbox" checked={showTimer} onChange={(evt) =>  setShowTimer(evt.target.checked)} />
            <label> Show Timer </label>
            {showTimer ? <Timer/> : null }
        </div>
    )
}

export default TimerContainer;