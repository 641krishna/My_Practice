import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const getData = async (id) => {
    return await fetch(`https://www.omdbapi.com/?i=${id}&apikey=bb505434`)
        .then(res => res.json())
}

const Single = () => {
    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        getData(id)
            .then(res => {
                setData(res)
            })
    }, [id])

    console.log(data)

    return (
        <div>
            <div className="single">
                <h2>{data.Title}</h2>
                <h2>Cast : {data.Actors} </h2>
                <img src={data.Poster} alt={data.Poster} /><br />
                <NavLink to={'/'}><button>Back</button></NavLink>


            </div>

        </div>
    )
}

export default Single;