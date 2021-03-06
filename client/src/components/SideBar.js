import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {handleLogout} from '../actions/auth';
import {withRouter} from 'react-router-dom';

class SideBar extends Component {
    render() {
      const { visible } = this.props
      // if(user.id)
      return (
        <div>
          {/*<Sidebar.Pushable >*/}
            <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Link to='/bio'>
              <Menu.Item name='id badge'>
                <Icon name='id badge' />
                My Bio
                {this.props.loggedinUser &&
                  this.props.loggedInUser.email
                }
              </Menu.Item>
            </Link>
            <Link to='/sports'>
              <Menu.Item name='soccer'>
                <Icon name='soccer' />
                All Sports
              </Menu.Item>
            </Link>
            <Link to='/user_sports'>
              <Menu.Item name='checkmark'>
                <Icon name='checkmark' />
                Favorite Sports
              </Menu.Item>
            </Link>
            <Link to='/users'>
              <Menu.Item name='users'>
                <Icon name='users' />
                Social
              </Menu.Item>
            </Link>

            <button style={{ backgroundColor: 'transparent', border: 'black' }} onClick = {() => this.props.dispatch(handleLogout(this.props.history))} >
              <Menu.Item name='sign out'>
                <Icon name='sign out' />
                LogOut
              </Menu.Item>
            </button>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
              </Segment>
            </Sidebar.Pusher>
          {/*</Sidebar.Pushable>*/}
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loggedInUser: state.user.loggedInUser
  }
}

export default withRouter(connect(mapStateToProps)(SideBar));
