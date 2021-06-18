import React from 'react';
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Team from './Pages/Team'
import Roulette from './Pages/Roulette'
import About from './Pages/About'

import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, bitsTheme, glassTheme, GlobalStyle } from './styles/GlobalStyle'

const App = () => {

    const theme = useSelector(state => state.themes.theme)
    
    const style = useSelector(state => state.themes.style)

    return(
      <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <ThemeProvider theme={style === 'bits' ? bitsTheme : glassTheme}>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/details/:id' component={Details}/>
            <Route exact path='/team' component={Team}/>
            <Route exact path='/roulette' component={Roulette}/>
            <Route exact path='/about' component={About}/>
          </Switch>
          <GlobalStyle/>
        </ThemeProvider>
      </ThemeProvider>
      </>
    )
}

export default App;
