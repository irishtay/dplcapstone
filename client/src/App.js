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
import FetchUser from './components/FetchUser';
import Posts from './components/Posts';
import FetchSports from './components/FetchSports';
import FetchUserSports from './components/FetchUserSports'
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment basic style={styles.app}>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path="/sports" component={FetchSports} />
            <Route path="/user_sports" component={FetchUserSports} />
            <Route path="/posts" component={Posts} />
            <ProtectedRoute exact path='/bio' component={Bio} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Segment>
    );
  }
}

const styles = {
  app: {
    height: '100vh',
  }
}

export default App;
