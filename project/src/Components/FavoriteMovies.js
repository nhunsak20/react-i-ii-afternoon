import React from 'react'

function FavoriteMovies(props) {
    const { data } = props
    
    const movies = data.favoriteMovies.map(moive => <li className='movie-list' key={moive}> {moive}</li>)
    
    return (
        <div>
            <h3>Favorite Movies:</h3>
            <ol className='movies-items'>
                {movies}
            </ol>
        </div>
    )
}

export default FavoriteMovies