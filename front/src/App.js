import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import Details from './Pages/Details'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import React, { Component} from 'react';
import { render } from 'react-dom';


const App = () => (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/details' component={Details}/>
      </Switch>
      <GlobalStyle/>
    </>
)

export default App;
