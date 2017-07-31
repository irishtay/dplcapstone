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
import { Segment } from 'semantic-ui-react';
import FetchUserSports from './components/FetchUserSports'
import PostForm from './components/PostForm';
import ChatWindow from './components/ChatWindow';

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
            <ProtectedRoute path="/sports" component={FetchSports} />
            <ProtectedRoute path="/user_sports" component={FetchUserSports} />
            <ProtectedRoute exact path='/posts/:post_id/chat' component={ChatWindow} />
            <ProtectedRoute path="/posts" component={Posts} />
            <ProtectedRoute exact path='/bio' component={Bio} />
            <ProtectedRoute exact path="/PostForm" component={PostForm} />
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
