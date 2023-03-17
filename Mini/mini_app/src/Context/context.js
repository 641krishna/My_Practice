import React, { useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic`;

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: false, msg: '' })

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.Search);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search)
            } else {
                setIsError({
                    show: true,
                    setIsError: data.error
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovies(API_URL)
    }, [])


    return (
        <AppContext.Provider value={{ isLoading, isError, movie }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;