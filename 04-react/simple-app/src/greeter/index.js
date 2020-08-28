import React, { useState } from "react";

const Greeter = () => {
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');
    const onGreetClick = () => {
        const msg = `Hi ${userName}, Have a nice day!`
        setMessage(msg);
    };
    return(
        <div>
            <h1>Greeter</h1>
            <hr/>
            <label htmlFor="">User Name :</label>
            <input type="text" onChange={ evt => setUserName(evt.target.value) }/>
            <input type="button" value="Greet" onClick={onGreetClick}/>
            <div>{message}</div>
        </div>
    )
}

export default Greeter;