import React, {useContext} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {AuthContext} from "./context/auth/authContext";
import {CommandsState} from "./context/commands/CommandsState";
import {Navbar} from "./components/Navbar";
import {Auth} from "./pages/Auth";
import {Main} from "./pages/Main";
import {Details} from "./pages/Details";
import {Rights} from "./pages/Rights";

function App() {

  const {auth} = useContext(AuthContext)

  return (
    <CommandsState>
      <BrowserRouter>
        <div className="position-absolute" style={{top: "50px", right: "50px"}}>
          <div className="alert alert-warning alert-animation" role="alert" style={{opacity: auth.isError ? '1' : '0'}}>
            {auth.message}
          </div>
        </div>


        <div className="container p-0">
          {auth.isAuth ?
            <>
              <Navbar/>
              <Switch>
                <Route path={'/'} exact component={Main}/>
                <Route path={'/rights'}  exact component={Rights}/>
                <Route path={'/:id'} component={Details}/>
                <Redirect to={'/'}/>
              </Switch>
            </>
            :
            <Switch>
              <Route path={'/'} exact component={Auth}/>
              <Redirect to={'/'}/>
            </Switch>
          }
        </div>
      </BrowserRouter>
    </CommandsState>
  )
}

export default App
