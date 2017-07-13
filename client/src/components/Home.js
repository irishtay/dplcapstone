import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import backgroundImage from '../images/soccer-ball-fire2.jpg';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    if(this.props.user) {
      return(
        <Segment basic style={styles.main}>
        <Link to = '/login'>
          <Image
            inline={true}
            style={{verticalAlign: 'middle'}}
            src='http://res.cloudinary.com/dxvd6262z/image/upload/v1499813182/a2a-white_360_ic2ef7.png'
            size='large'
            centered
          />
        </Link>
      </Segment>
      );
    } else {
      return(
        <div>Log in to Athlete 2 Athlete</div>
      )
    }
  }
}

const styles = {
  main: {
    height: '100%',
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  },
}

// <Map location={{lat: 234, lng: 234}}/>
const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Home);
