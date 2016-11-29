import React from 'react'
import { directors } from '../data'

const Directors = () => {
  let directorContent = directors.map((director) => {
    return (
      <div><ul><li>{director.name}</li>
        <ul>
            {director.movies.map((movie)=>{
              return <li>{movie}</li>
            })}
        </ul>
      </ul></div>
    )
  })
    return (
        <div>
          <h1>Directors Page</h1>
          {directorContent}
        </div>
    )
}

module.exports = Directors
