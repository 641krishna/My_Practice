import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../Context/context'
import "../Components/movies.css"

const Movies = () => {

    const { movie } = useContext(AppContext)
    console.log(movie)

    return (
        <>
            <section className='movie-page'>
                <div className="grid4">
                    {movie.map((elem) => {
                        const { imdbID, Title, Poster } = elem;
                        const movieName = Title.substring(0, 15);
                        return <NavLink to={`movie/${imdbID}`} key={imdbID}>
                            <div className="card">
                                <div className="card-info">
                                    <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                                    <img src={Poster} alt={`$imdbID`} />
                                </div>
                            </div>
                        </NavLink>
                    })}
                </div>

            </section>

        </>
    )
}

export default Movies