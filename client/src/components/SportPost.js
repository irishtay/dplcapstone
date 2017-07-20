import React from 'react';
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts';
import {Link} from 'react-router-dom';
import {
  Container,
  Icon,
  Grid,
  Header,
  Card,
  Image,
  Dropdown,
  Divider,
  Modal,
  Rating,
  Button,
  Segment,
} from 'semantic-ui-react';

const SportPost = (props) => {
    const { postInfo } = props;
    return(
        <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
        <Card.Header>
         <div key={postInfo.id}>
                    <h4>{postInfo.title}</h4>
                </div>
        </Card.Header>
        <Card.Meta>
          <div key={postInfo.id}>
                    <h4>{postInfo.state}</h4>
                </div>
        </Card.Meta>
        <Card.Description>
          {postInfo.user_id} posted: <strong> {postInfo.post_body}</strong>
        </Card.Description>
      </Card.Content>
      { props.userId === postInfo.user_id && 
        <Card.Content extra>
            <div className='ui two buttons'>
            <Button basic color='green'>Edit</Button>
            <Button basic color='red'>Delete</Button>
            </div>
        </Card.Content>
      }
    </Card>
       
    )
}

const mapStateToProps = (state) => {
    return { userId: state.user.id }
}

export default connect(mapStateToProps)(SportPost);