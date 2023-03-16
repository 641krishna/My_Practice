import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(null);
    const [now, setNow] = useState(null);

    const Ref = useRef(null);
    const handleStart = () => {
        setTime(Date.now());
        setNow(Date.now());
        Ref.current = setInterval(() => {
            setTime(Date.now());
        }, 10)
    }

    const handleStop = () => {
        clearInterval(Ref.current)
    };

    const timePassed = (time - now) / 1000;
    return (
        <div>
            <h4>StopWatch</h4>
            <h3>{timePassed}</h3>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Stopwatch