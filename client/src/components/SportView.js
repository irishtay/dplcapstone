import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getSportPosts } from '../actions/posts';

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
    return(
      <Container>
        <Header as="h3" textAlign="center">{sport.name}</Header>
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
