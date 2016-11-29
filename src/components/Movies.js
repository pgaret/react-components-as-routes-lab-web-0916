import React from 'react'
import { movies } from '../data'

const Movies = () => {
  let movieContent = movies.map((movie)=>{
    return (
      <div>{movie.title}<ul><li>{movie.time}</li><li>{movie.metascore}</li>
          <ul>{movie.genres.map((genre)=>
            <li>{genre}</li>
          )}</ul>
        </ul></div>
    )
  })
    return (
        <div>
            <h1>Movies Page</h1>
            {movieContent}
        </div>
    )
}

module.exports = Movies
