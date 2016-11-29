import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Actors from './components/Actors'
import App from './components/App'
import Directors from './components/Directors'
import Home from './components/Home'
import Movies from './components/Movies'

const Routes = (
  <Route path="/" component={App}>
    <Route path="/Movies" component={App}></Route>
    <Route path="/Directors" component={App}></Route>
    <Route path="/Actors" component={App}></Route>
  </Route>
)


module.exports = Routes
