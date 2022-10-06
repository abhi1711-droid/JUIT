import React, { useEffect } from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import './styles/main.scss';
import Home from './Home'
import Events from './Events'
import Teachers from './Teachers'
import MessMenu from './MessMenu'
import Notice from './Notice'
import Login from './SignIn';

const App=()=>{
  
  return(
    <>
     <BrowserRouter>
    <Switch>
      <Route exact path = "/home" component={Home} />
      <Route exact path = "/events" component={Events} />
      <Route exact path = "/teachers" component={Teachers} />
      <Route exact path = "/messmenu" component={MessMenu} />
      <Route exact path = "/notice" component = {Notice} />
      <Route path = "/" component={Login} />
      </Switch>
      </BrowserRouter>
      <div className='bg-balls' />
     
     </> 

  )
}

export default App