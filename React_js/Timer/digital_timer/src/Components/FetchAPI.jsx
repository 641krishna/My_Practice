import React, { useState } from 'react'

const FetchAPI = () => {
    const [data, setData] = useState([]);
    const getApi = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData(json)
            })
    }
    return (
        <div>
            <h2>FetchAPI</h2>
            <button onClick={getApi}>Click Here</button>
            <pre>{JSON.stringify(data,null,2)}</pre>
            </div>
    )
}

export default FetchAPI