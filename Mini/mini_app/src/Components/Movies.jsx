import React, { useContext } from 'react'
import { AppContext } from '../Context/context'

const Movies = () => {

    const { movie } = useContext(AppContext)

    return (
        <>
            {movie.map((elem) => {
                return <div>
                    <h2>{elem.title}</h2>
                </div>
            })}
        </>
    )
}

export default Movies