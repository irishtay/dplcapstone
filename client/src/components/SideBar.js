import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
              </Menu.Item>
            </Link>
            <Link to='/sports'>
              <Menu.Item name='soccer'>
                <Icon name='soccer' />
                All Sports
              </Menu.Item>
            </Link>
            <Link to='/'>
              <Menu.Item name='sign out'>
                <Icon name='sign out' />
                LogOut
              </Menu.Item>
            </Link>
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
  return { user: state.user }
}

export default connect(mapStateToProps)(SideBar);
