import React, { useState } from 'react'

const Digital = () => {

    const timer = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(timer)

    const updateTime = () => {
        const timer = new Date().toLocaleTimeString();
        setTime(timer);
    }

    setInterval(updateTime,1000)


    return (
        <div>
            <h1>{ctime}</h1>
            {/* <button onClick={updateTime}>Get Updated Time</button> */}
        </div>
    )
}

export default Digital