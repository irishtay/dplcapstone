import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getSportPosts } from '../actions/posts';
import SportPost from './SportPost';
import Map from './Map';

class SportView extends React.Component {

  componentDidMount() {
    this.props.dispatch(getSportPosts(this.props.match.params.id))
  }

  render() {
    const { sport } = this.props;
    if(!sport) {
      return(<div>loading sport</div>)
    }
    console.log(this.props.posts);

    let allPosts = this.props.posts.map( p => {
      return <SportPost postInfo={ p } />
    })

    return(
      <Container>
        <br />
        <Header as="h1" style={{ fontFamily: 'Rock Salt' }} textAlign="center">{sport.name}</Header>
        <Link to='/PostForm'><Button>Add Post</Button></Link>
        <Link to='/Sports'><Button>All Sports</Button></Link>
        <Link to='/Posts'><Button>All Posts</Button></Link>
        { allPosts }
        <Map posts={this.props.posts} />
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    sport: state.sports.find( a => a.id === parseInt(props.match.params.id )),
    posts: state.posts
  }
}

export default connect(mapStateToProps)(SportView);
