import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { setFlash } from '../actions/flash';
import { connect } from 'react-redux';
import {
  Button,
  Segment,
  Form,
  Header,
  Input,
  Divider,
  Image,
} from 'semantic-ui-react';
import axios from 'axios';
import basketballMapsIcon from '../images/basketball-maps-icon.png';

const Post = ({ text }) => (
  <div>{text}</div>
);

class Map extends Component {
  static defaultProps = {
    center: { lat: 40.477128, lng: -111.922185 },
    zoom: 16
  }

  state = {
    center: this.props.center,
    zoom: this.props.zoom,
    loaded: false
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        let { coords: { latitude, longitude } } = position;
        this.setState({ loaded: true, center: { lat: latitude, lng: longitude } });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  handleChange = (e) => {
    this.setState({ address: e.target.value });
  }

  createMapOptions = () => {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollWheel: true,
    }
  }

  displayMarkers = () => {
    return this.props.posts.map(post => {
      return(
        <div style={styles.marker} lat={post.lat} lng={post.long}>
          {post.title}
        </div>
      );
    });
  }

  render() {
    const { center, zoom, address } = this.state;

    return(
      <Segment>
        <Segment basic style={{ height: '600px', width: '600px' }}>
          <GoogleMapReact
            options={this.createMapOptions}
            defaultCenter={center}
            defaultZoom={zoom}
            center={center}
          >
            {
               this.props.posts.map( post => {
                 return(
                   <Post
                    lat={post.lat}
                    lng={post.long}
                    text={post.title}
                   />
                 )
               })
            }
            { this.displayMarkers() }
          </GoogleMapReact>
        </Segment>
      </Segment>
    )
  }
}

const styles = {
  marker: {
    width: '0',
    height: '0',
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderTop: '15px solid #f00',
  }
}

export default connect()(Map);
