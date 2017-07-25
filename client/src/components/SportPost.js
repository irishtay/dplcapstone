import React from 'react';
import { connect } from 'react-redux'
import { getPosts, deletePost } from '../actions/posts';
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
  Menu,
} from 'semantic-ui-react';
import PostForm from './PostForm';

class SportPost extends React.Component {
    state = { edit: false }

    toggleEdit = () => {
        this.setState({ edit: !this.state.edit })
    }

    render() {
        const { postInfo, dispatch } = this.props;
        const { edit } = this.state

        if (this.state.edit)
          return <PostForm postInfo={postInfo} toggleEdit={this.toggleEdit} />
        else {
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
                <Link to='/chat'>
                  <Menu.Item name='wechat'>
                    <Icon name='wechat' />
                    Click Here To Chat
                  </Menu.Item>
                </Link>
            </Card.Content>
            { this.props.userId === postInfo.user_id &&
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button onClick={this.toggleEdit} basic color='green'>Edit</Button>
                    <Button onClick={ () => dispatch(deletePost(postInfo.id)) } basic color='red'>Delete</Button>
                    </div>
                </Card.Content>
            }
            </Card>

            )
        }
    }
}

const mapStateToProps = (state) => {
    return { userId: state.user.id }
}

export default connect(mapStateToProps)(SportPost);
