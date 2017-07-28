import React from 'react';
import { connect } from 'react-redux'
import { getPosts, deletePost, updatePost } from '../actions/posts';
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
import PostForm from './PostForm'

class Posts extends React.Component {
    state = { editing: [] }

    componentDidMount() {
        this.props.dispatch(getPosts());
    }

    deletePost = (id) => {
        this.props.dispatch(deletePost(id));  
    }

    toggleEdit = (id) => {
        let { editing } = this.state;
        let data = [];
        if (editing.includes(id))
          data = editing.filter( el => el !== id )
        else
          data = [...editing, id]
        
        this.setState({ editing: data })
    }

    displayPosts = () => {
        let { editing, dispatch, postInfo } = this.state;
        return this.props.posts.map( post => {
            return(
                
    <Card key={post.id}>
        { editing.includes(post.id) ? 
            <PostForm cancel={this.toggleEdit} postInfo={post} />
            :
      <div>
      <Card.Content>
        {/*{<Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />*/}
        
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
            { this.props.userId === postInfo.user_id && 
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button onClick={this.toggleEdit} basic color='green'>Edit</Button>
                    <Button onClick={ () => dispatch(deletePost(postInfo.id)) } basic color='red'>Delete</Button>
                    </div>
                </Card.Content>
            }
          {/*<Button 
                basic color='green'
                className='postEdit'
                onClick={() => this.toggleEdit(post.id)}
                >
                Edit
                </Button>
          <Button 
                basic color='red'
                className='postDelete'
                onClick={() => this.deletePost(post.id)}
                >
                Delete
                </Button>*/}
        </div>
      </Card.Content>
      </div>
        }
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
    return { posts: state.posts, userID: state.user.id }
}

export default connect(mapStateToProps)(Posts);