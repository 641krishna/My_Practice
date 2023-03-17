import React, { useContext } from 'react'
import { AppContext } from '../Context/context'

const Home = () => {

    const name = useContext(AppContext);

    return (
        <div>
            Home
            <p>{name}</p>
        </div>

    )
}

export default Home