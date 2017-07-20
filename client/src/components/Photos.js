import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUpload, fetchPhotos } from '../actions/photos';
import { Segment, Image, Divider, Header } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class Photos extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPhotos());
  }

  onDrop = (photos) => {
    this.props.dispatch(handleUpload(photos[0]));
  }

  displayPhotos = () => {
    return this.props.photos.map( photo => {
      return(<Image size='big' key={photo.id} src={photo.url} alt={photo} />);
    });
  }

  render() {
    return(
      <Segment>
        <Header as='h2' style={{ fontFamily: 'Impact' }}>---- My Photo ----</Header>
        <Dropzone
          onDrop={this.onDrop}
          style={{ width: '100%', height: '100px', border: '1px dashed black'}}
        >
          <Header as='h5'> Click or Drop Photo</Header>
        </Dropzone>
        { this.displayPhotos()}
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos };
}

export default connect(mapStateToProps)(Photos);
