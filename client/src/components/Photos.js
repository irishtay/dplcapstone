import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUpload, deletePhoto } from '../actions/photos';
import { Segment, Image, Divider, Header, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class Photos extends Component {
 onDrop = (photos) => {
    this.props.dispatch(handleUpload(photos[0]));
  }

  deletePhoto = (id) => {
    this.props.dispatch(deletePhoto(id));
  }

 displayPhotos = () => {
    // TODO: onClick on the button will dispatch the delete photo action
    return(
      <Segment basic>
        <Image centered size='big' src={this.props.bio.image_url} alt='User Bio Photo' />
        <Divider hidden />
        <Button onClick={() => this.deletePhoto()} primary type='button'>Delete</Button>
      </Segment>
    )
  }

 render() {
    return(
      <Segment>
        <Header as='h2' style={{ fontFamily: 'Rock Salt' }}>---- My Photo ----</Header>
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
  return { bio: state.bio };
}

export default connect(mapStateToProps)(Photos);
