import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [num, setNum] = useState(0);
    const [show, setShow] = useState(false);

    const getValue = () => {
        return setNum(num + 1)
    }

    const countNumber = (num) => {
        console.log(num)
        for (let i = 0; i <= 100000; i++) { }
        return num;

    }

    // const checkData = countNumber(num)

    const checkData = useMemo(() => {
        return countNumber(num)
    }, [num])


    return (
        <div>
            <button onClick={getValue}>Counter</button>
            <h1>My New Number is :{checkData}</h1>
            <button onClick={() => setShow(!show)}>{show ? "You Clicked me" : "Click me Plz"}</button>

        </div>
    )
}

export default Usememo