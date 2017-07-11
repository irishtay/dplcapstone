import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import { connect } from 'react-redux'
import backgroundImage from '../images/BackImage2.jpeg';

class Home extends Component {
  render() {
    if(this.props.user) {
      return(
        <Segment basic style={styles.main}>

          <Image
            inline={true}
            style={{verticalAlign: 'middle'}}
            src='http://res.cloudinary.com/dxvd6262z/image/upload/v1499726505/a2alogo_480_vpsmna.png'
            size='huge'
            centered
          />
        </Segment>
      );
    } else {
      return(
        <div>Log in to see home</div>
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
    alignItems: 'center'
  },
  logo: {
    backgroundImage: 'url("http://res.cloudinary.com/dxvd6262z/image/upload/v1499726505/a2alogo_480_vpsmna.png")',
    backgroundRepeat: 'no-repeat',
    height: '300px',
  }
}

// <Map location={{lat: 234, lng: 234}}/>
const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Home);
