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
  Divider
} from 'semantic-ui-react';
import axios from 'axios';

class Map extends Component {
  static defaultProps = {
    center: { lat: 40.477128, lng: -111.922185 },
    zoom: 16
  }

  state = {
    center: this.props.center,
    zoom: this.props.zoom,
    address: 'DevPoint Labs',
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

  findAddress = () => {
    const { dispatch } = this.props;
    const { address } = this.state;

    axios.get(`/api/location?address=${address}`)
      .then( res => {
        let { data } = res;
        this.setState({ address, center: { lat: data[0], lng: data[1] } });
        dispatch(setFlash('Address Found!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Error finding address', 'error'));
    });
  }

  createMapOptions = () => {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollWheel: true,
    }
  }

  render() {
    const { center, zoom, address } = this.state;

    return(
      <Segment>
        <Header as='h2'>Google Map - Address Checker</Header>
        <Form onSubmit={this.findAddress}>
          <Input
            value={address}
            onChange={this.handleChange}
            required
            placeholder='Find An Address'
          />
          <Button primary type='submit'>Go!</Button>
          <Divider />
          { this.state.loaded &&
            <Segment basic style={{ height: '600px', width: '600px', margin: '0 auto' }}>
              <GoogleMapReact
                options={this.createMapOptions}
                defaultCenter={center}
                defaultZoom={zoom}
                center={center}
              />
            </Segment>
          }
        </Form>
      </Segment>
    )
  }


}

export default connect()(Map);
