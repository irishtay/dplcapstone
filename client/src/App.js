import React, { Component } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Bio from './components/Bio';
import Flash from './components/Flash';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import Languages from './components/Languages';
import FetchUser from './components/FetchUser';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <ProtectedRoute exact path='/bio' component={Bio} />
            <ProtectedRoute exact path='/languages' component={Languages} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
