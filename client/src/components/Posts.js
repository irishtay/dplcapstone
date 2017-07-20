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

class Posts extends React.Component {

    componentDidMount() {
        this.props.dispatch(getPosts());
    }


    displayPosts = () => {
        return this.props.posts.map( post => {
            return(
                
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
        <Card.Header>
         <div key={post.id}>
                    <h4>{post.title}</h4>
                </div>
        </Card.Header>
        <Card.Meta>
          <div key={post.id}>
                    <h4>{post.state}</h4>
                </div>
        </Card.Meta>
        <Card.Description>
          {post.user_id} posted: <strong> {post.post_body}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Edit</Button>
          <Button basic color='red'>Delete</Button>
        </div>
      </Card.Content>
    </Card>
            )
        })
    }
  
    render () {
        console.log(this.props.posts)
        return (
            <div> 
            <Link to='/PostForm'> 
            New Post
            </Link>               
            {this.displayPosts()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(Posts);