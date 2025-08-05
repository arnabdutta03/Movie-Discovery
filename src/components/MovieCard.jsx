import React from 'react'

function MovieCard({ movie: { id, title, poster_path, vote_average, release_date, original_language, overview } }) {

    return (
        <div className='movie-card'>
            <div>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt={title}></img>

                <div className='mt-4'>
                    <h3 key={id} className='text-white mt-6 mb-1'>{title}</h3>
                    <div className='content'>
                        <div className='rating'>
                            <img src='/public/star.png'></img>
                            <p className='text-amber-300 '>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                        </div>
                        <span>•</span>
                        <p className='lang'>{original_language}</p>
                        <span>•</span>
                        <p className='year'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                    </div>
                    <p className='text-gray-500 font-medium text-base text-justify'>
                        {overview.length > 120 ? `${overview.slice(0, 60)}...` : 'N/A'}
                    </p>

                </div>

            </div>


        </div>
    )
}

export default MovieCard