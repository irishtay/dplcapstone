import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/users.css';
import {
  Container,
  Icon,
  Grid,
  Header,
  Card,
  List,
  Image,
  Dropdown,
  Divider,
  Modal,
  Rating,
  Button,
  Segment,
} from 'semantic-ui-react';
import { getUsers } from '../actions/users';
import { getBio } from '../actions/bio';

class Users extends React.Component {
  state = { whichList: 'all', friendsList: [] };

  handleListChange = (val) => {
    this.setState({
      whichList: val
    })
  }
  componentDidMount() {
    this.props.dispatch(getUsers());
    this.props.dispatch(getBio());
    axios({
      method: 'GET',
      url: `/api/friends`
    })
    .then(res => {
      this.setState({
        friendsList: res.data
      })
    })
  }
  handleAccept = (user) => {
    console.log(user);
    axios({
      method: 'PUT',
      url: `/api/friends/${user.id}`,
      data: {accepted: true}
    }).then(r => {
      if(r.status === 200){
        axios({
          method: 'GET',
          url: `/api/friends`
        })
        .then(res => {
          this.setState({
            friendsList: res.data,
            whichList: 'friends'
          })
        })
      }
    })
  }
  handleSubmit = (v) => {
    let theId;
    if(this.props.loggedInUser){
      theId = this.props.loggedInUser.id
    }
    let friendRequestObj = {
      requesting_user_id: theId,
      requesting_user_name: this.props.bio.name,
      requesting_user_body: this.props.bio.body,
      requesting_user_img: this.props.bio.image_url,
      receiving_user_id: v.id,
      receiving_user_name: v.name,
      receiving_user_body: v.body,
      receiving_user_img: v.image_url
    }
    console.log(friendRequestObj);
    axios({
      method: 'POST',
      url: '/api/friends',
      data: friendRequestObj
    })
    .then(res => {
      if(res.status === 200){
        axios({
          method: 'GET',
          url: `/api/friends`
        })
        .then(res => {
          this.setState({
            friendsList: res.data
          })
        })
      }
    })
  }
  displayUsers = () => {
    let theId;
    if(this.props.loggedInUser){
      theId = this.props.loggedInUser.id
    }
    if(this.state.whichList === 'all'){
      let filtered = this.props.users.filter(v =>{
       if(theId !== v.id) {
         return v;
       }
     })
     return this.theRealDisplay(filtered)
   } else if(this.state.whichList === 'friends'){
       let friendsFiltered = this.state.friendsList.filter(v =>{
        if(v.requesting_user_id === theId && v.accepted || v.receiving_user_id === theId && v.accepted) {
          return v;
        }
      })
      return this.theRealDisplay(friendsFiltered)
   } else if(this.state.whichList === 'pending'){
       let pendingFiltered = this.state.friendsList.filter(v =>{
        if(v.requesting_user_id === theId && !v.accepted) {
          return v;
        }
      })
      return this.theRealDisplay(pendingFiltered)
   } else if(this.state.whichList === 'requests'){
       let requestsFiltered = this.state.friendsList.filter(v =>{
        if(v.receiving_user_id === theId && !v.accepted) {
          return v;
        }
      })
      return this.theRealDisplay(requestsFiltered)
   }

  }
  displayName = (user) => {
    let theId;
    if(this.props.loggedInUser){
      theId = this.props.loggedInUser.id
    }
    if(this.state.whichList === 'all'){
      return (
        <div>
        <List.Header as='a'>{user.name}</List.Header>
        <List.Description>{user.body}</List.Description>
        </div>
      )
    } else if(this.state.whichList === 'requests') {
    return (
      <div>
        <List.Header as='a'>{user.requesting_user_name}</List.Header>
        <List.Description>{user.requesting_user_body}</List.Description>
        </div>
    )
  } else if(this.state.whichList === 'friends') {
    if(user.requesting_user_id === theId){
      return (
        <div>
          <List.Header as='a'>{user.receiving_user_name}</List.Header>
          <List.Description>{user.receiving_user_body}</List.Description>
          </div>
      )
    } else if(user.receiving_user_id === theId){
      return (
        <div>
          <List.Header as='a'>{user.requesting_user_name}</List.Header>
          <List.Description>{user.requesting_user_body}</List.Description>
          </div>
      )
    }

    } else {
      return (
        <div>
        <List.Header as='a'>{user.receiving_user_name}</List.Header>
        <List.Description>{user.receiving_user_body}</List.Description>
        </div>
      )
    }
  }
  displayImgs = (user) => {
    let theId;
    if(this.props.loggedInUser){
      theId = this.props.loggedInUser.id
    }
    if(this.state.whichList === 'all'){
      return (
        <Image avatar src={user.image_url} />
      )
    } else if(this.state.whichList === 'requests') {
    return (
      <Image avatar src={user.requesting_user_img} />
    )
    }
    else if(this.state.whichList === 'friends') {
      if(user.requesting_user_id === theId){
        return (
          <Image avatar src={user.receiving_user_img} />
        )
      } else if(user.receiving_user_id === theId){
        return (
          <Image avatar src={user.requesting_user_img} />
        )
      }

      } else {
      return (
        <Image avatar src={user.receiving_user_img} />
      )
    }
  }
  theRealDisplay = (filtered) => {
    return filtered.map((user, i) => {
      return(
      <div>
          <div key={i}>
        <List divided vertical size={'huge'} celled>
        <List.Item>
        <List.Content floated='right'>
        {this.state.whichList === 'all' &&
          <Button onClick={this.handleSubmit.bind(this, user)}>Add</Button>
        }
        {this.state.whichList === 'requests' &&
          <Button onClick={this.handleAccept.bind(this, user)}>Accept</Button>
        }
        {this.state.whichList === 'pending' &&
          <div>Pending</div>
        }
      </List.Content>
          {this.displayImgs(user)}
          <List.Content>
          {this.displayName(user)}

          </List.Content>
        </List.Item>
        </List>
        <br />
        </div>

      </div>
      )
    });
  }

  render() {
    console.log(this.props);
    let userEmail;
    if(this.props.loggedInUser){
      userEmail = this.props.loggedInUser.email
    }
    return(
      <Segment basic>
        <Header as='h1' style={{ color: 'blue' }} textAlign='center'>{userEmail}</Header>
        <div className="friendsSection">
          <span onClick={this.handleListChange.bind(this, 'all')}>All</span>
          <span onClick={this.handleListChange.bind(this, 'friends')}>Friends</span>
          <span onClick={this.handleListChange.bind(this, 'pending')}>Pending</span>
          <span onClick={this.handleListChange.bind(this, 'requests')}>Requests</span>
        </div>
        <List>
          {this.displayUsers()}
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.user.loggedInUser,
    users: state.userList,
    bio: state.bio,
    photos: state.photos,
   };
}

export default connect(mapStateToProps)(Users);
