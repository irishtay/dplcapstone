import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if(user.id) {
      // The user is logged in
      return(
        <Menu.Menu position='right'>
          <Link to='/bio'>
            <Menu.Item name='My Bio' />
          </Link>
          <Link to='/sports'>
            <Menu.Item name='All Sports' />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    } else {
      // The user logged out
      // show the register and login items
      return(
        <Menu.Menu position='right'>
          <Link to='/register'>
            <Menu.Item name='Register' />
          </Link>
          <Link to='/login'>
            <Menu.Item name='Login' />
          </Link>
        </Menu.Menu>
      );
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
