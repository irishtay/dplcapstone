import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import SideBar from './SideBar';
import onClickOutside from 'react-onclickoutside';
import logo from '../images/a2a-new_720.png'

class NavBar extends Component {
  state = { visible: false }

  rightNavs = () => {
    const { user, dispatch, history } = this.props;
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleClickOutside = evt => {
    this.setState({ visible: false, activeItem: '' })
  }

  handleItemClick = (url) => {
    this.props.history.push(url);
  }

  render() {
    const { activeItem } = this.state;
    const noNavItems = ['/', '/login', '/register', '/home']
    if (noNavItems.includes(this.props.location.pathname))
      return null
    else {
      return(
        <Menu stackable inverted>
        <Menu.Item>
          <img src={logo} onClick={() => this.handleItemClick('/home')} />
        </Menu.Item>

        <Menu.Item
          name='My Bio'
          active={activeItem === 'bio'}
          onClick={() => this.handleItemClick('/bio')}
        >
          My Bio
        </Menu.Item>

        <Menu.Item
          name='All Sports'
          active={activeItem === 'all_sports'}
          onClick={() => this.handleItemClick('/sports')}
        >
          All Sports
        </Menu.Item>

        <Menu.Item
          name='Favorite Sports'
          active={activeItem === 'favorite_sports'}
          onClick={() => this.handleItemClick('/user_sports')}
        >
          Favorite Sports
        </Menu.Item>

        <Menu.Item
          name='Social'
          active={activeItem === 'users'}
          onClick={() => this.handleItemClick('/users')}
        >
          Social
        </Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={() => this.handleItemClick('/login')}
        >
          Sign-Out
        </Menu.Item>
        </Menu.Menu>
      </Menu>
      )
    }
  }
}


export default withRouter(onClickOutside(NavBar));
