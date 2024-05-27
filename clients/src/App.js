import React, { useContext } from 'react';
import "./App.scss";

import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

// 2
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// 118
import { AuthContext } from './authContext/AuthContext';

const App = () => {
  // 119
  const {user} = useContext(AuthContext);
  return (
    <div className="App">
      {/* <Home></Home> */}

      {/* 3 */}
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home></Home> : <Redirect to="/register"></Redirect>}
          </Route>
          <Route path="/register">
            {user ? <Redirect to="/"></Redirect> : <Register></Register>}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/"></Redirect> : <Login></Login>}
          </Route>
          {user && 
            <>
              <Route path="/movies">
                <Home type="movies"></Home>
              </Route>
              <Route path="/series">
                <Home type="series"></Home>
              </Route>
              <Route path="/watch">
                <Watch></Watch>
              </Route>
            </>
          }
        </Switch>
      </Router>
    </div>
  )
}

export default App;