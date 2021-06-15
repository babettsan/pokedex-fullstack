import React from 'react';
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Team from './Pages/Team'
import Roulette from './Pages/Roulette'
import About from './Pages/About'

import { Switch, Route } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'

const App = () => (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/details/:id' component={Details}/>
        <Route exact path='/team' component={Team}/>
        <Route exact path='/roulette' component={Roulette}/>
        <Route exact path='/about' component={About}/>
      </Switch>
      <GlobalStyle/>
    </>
)

export default App;
