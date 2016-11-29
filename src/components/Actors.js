import React from 'react'
import { actors } from '../data'

const Actors = () => {
  let actorContent = actors.map((actor) => {
    return (
      <div><ul><li>{actor.name}</li>
        <ul>
            {actor.movies.map((movie)=>{
              return <li>{movie}</li>
            })}
        </ul>
      </ul></div>
    )
  })
    return (
        <div>
          <h1>Actors Page</h1>
          {actorContent}
        </div>
    )
}

module.exports = Actors
