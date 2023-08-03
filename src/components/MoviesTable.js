
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovies} from '../redux/MoviesSlice';
import "./Style.css"

const MoviesTable = () => {
    const dispatch = useDispatch();
    const {movies, loading, error} = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="movie">
            <h1>The Basics - Networking</h1>
            <h2>Your app fetched this from a remote endpoint</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Year</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={index}>
                            <td>{movie.title}</td>
                            <td>{movie.releaseYear}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MoviesTable;
