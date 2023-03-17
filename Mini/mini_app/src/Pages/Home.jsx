import React, { useContext } from 'react'
import Movies from '../Components/Movies'
import Search from '../Components/Search'
import { AppContext } from '../Context/context'

const Home = () => {



    return (
        <div>
            <Search />
            <Movies />
        </div>

    )
}

export default Home