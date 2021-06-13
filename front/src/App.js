import React from 'react';
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import Details from './Pages/Details'

import { Switch, Route } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'

const App = () => (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/details/:id' component={Details}/>
      </Switch>
      <GlobalStyle/>
    </>
)

export default App;
