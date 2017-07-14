import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import SideBar from './SideBar';
import onClickOutside from 'react-onclickoutside';

class NavBar extends Component {
  state = { visible: false }

  rightNavs = () => {
    const { user, dispatch, history } = this.props;
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleClickOutside = evt => {
    this.setState({ visible: false })
  }

  render() {
    if (this.props.location.pathname == '/')
      return null
    else {
      return (
        <div style={{backgroundColor: "#808080"}}>
          <SideBar {...this.state} />
          <Menu pointing secondary>
            <Button class='menu-button' basic onClick={this.toggleVisibility}>
              <Icon name='content' />
            </Button>
            { this.rightNavs() }
          </Menu>
        </div>
      )
    }
  }
}

export default withRouter(onClickOutside(NavBar));
