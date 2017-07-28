import React from 'react';
import { connect } from 'react-redux';
import { clearFlash } from '../actions/flash';
import '../styles/flash.css';
import { Button } from 'semantic-ui-react';

const fadeFlash = (dispatch) => {
  setTimeout( () => {
    dispatch(clearFlash());
  }, 15000)
}

// empty flash redex piece {}
// flash redux piece { message: 'created user!', msgType: 'success' }
const Flash = ({ flash, dispatch }) => {
  if(flash.message) {
    return(
      <div
        id='alert'
        className={`alert alert-${flash.msgType}`}
        style={{ fontFamily: 'Rock Salt', width: '40%', height: '60px', margin: '0 auto'}}
      >
        { flash.message }
        { fadeFlash(dispatch) }
        <Button
          style={{ fontFamily: 'Rock Salt', margin: 'auto auto', backgroundColor: 'blue'}}
          floated='right'
          inverted
          onClick={ () => dispatch(clearFlash()) }> OK </Button>
      </div>
    )
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return { flash: state.flash };
}

export default connect(mapStateToProps)(Flash);
