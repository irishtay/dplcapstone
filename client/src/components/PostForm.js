import React from 'react';
import { Button, Form, Segment, Header, Dropdown } from 'semantic-ui-react'
import { handlePostForm, updatePost } from '../actions/posts';
import { connect } from 'react-redux'
import { getSports } from '../actions/sports';
import { withRouter } from 'react-router-dom'

class PostForm extends React.Component {
    state = { title: '', post_body: '', st: '', sport_id: '', zip: '', streetAddress: '', city: '' }

    componentDidMount() {

        this.props.dispatch(getSports());
        if (this.props.postInfo) {
            const { title, post_body, state, id } = this.props.postInfo;
            if(this.props.match.params.id) {
                this.setState({ title, post_body, sport_id: this.props.match.params.id, st: state, id  });
            }
            this.setState({ title, post_body, sport_id: this.props.sport_id, st: state })
        }
    }


  handleSubmit = (e) => {
    e.preventDefault();

    const { title, post_body, st, sport_id, id, zip, city, streetAddress } = this.state;
      if (id)
        this.props.dispatch(updatePost(title, post_body, st, sport_id, id, zip, city, streetAddress, this.props.toggleEdit(id) ))
      else
        this.props.dispatch(handlePostForm(title, post_body, st, sport_id, this.props.history, zip, city, streetAddress))
  }

  

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  toggleFunction = () => {
      let { postInfo = {} } = this.props 
      if (postInfo.id)
        return () => this.props.toggleEdit(postInfo.id)
      else
        return () => this.props.history.push('/posts')
  }

    render () {
        const { title, post_body, st, sport_id, id, zip, city, streetAddress } = this.state;

    const stateOptions = [
       {
        text: 'AK',
        value: 'AK',
        id: 'AK'
       },
       {
        text: 'AL',
        value: 'AL',
        id: 'AL'
       },
       {
        text: 'AR',
        value: 'AR',
        id: 'AR'
       },
       {
        text: 'AZ',
        value: 'AZ',
        id: 'AZ'
       },
       {
        text: 'CA',
        value: 'CA',
        id: 'CA'
       },
       {
        text: 'CO',
        value: 'CO',
        id: 'CO'
       },
       {
        text: 'CT',
        value: 'CT',
        id: 'CT'
       },
       {
        text: 'DC',
        value: 'DC',
        id: 'DC'
       },
       {
        text: 'DE',
        value: 'DE',
        id: 'DE'

       },
       {
        text: 'FL',
        value: 'FL',
        id: 'FL'
       },
       {
        text: 'GA',
        value: 'GA',
        id: 'GA'
       },
       {
        text: 'HI',
        value: 'HI',
        id: 'HI'
       },
       {
        text: 'IA',
        value: 'IA',
        id: 'IA'
       },
       {
        text: 'ID',
        value: 'ID',
        id: 'ID'
       },
       {
        text: 'IL',
        value: 'IL',
        id: 'IL'
       },
       {
        text: 'IN',
        value: 'IN',
        id: 'IN'
       },
       {
        text: 'KS',
        value: 'KS',
        id: 'KS'
       },
       {
        text: 'KY',
        value: 'KY',
        id: 'KY'
       },
       {
        text: 'LA',
        value: 'LA',
        id: 'LA'
       },
       {
        text: 'MA',
        value: 'MA',
        id: 'MA'
       },
       {
        text: 'MD',
        value: 'MD',
        id: 'MD'
       },
       {
        text: 'ME',
        value: 'ME',
        id: 'ME'
       },
       {
        text: 'MI',
        value: 'MI',
        id: 'MI'
       },
       {
        text: 'MN',
        value: 'MN',
        id: 'MN'
       },
       {
        text: 'MO',
        value: 'MO',
        id: 'MO'
       },
       {
        text: 'MS',
        value: 'MS',
        id: 'MS'
       },
       {
        text: 'MT',
        value: 'MT',
        id: 'MT'
       },
       {
        text: 'NC',
        value: 'NC',
        id: 'NC'
       },
       {
        text: 'ND',
        value: 'ND',
        id: 'ND'
       },
       {
        text: 'NE',
        value: 'NE',
        id: 'NE'
       },
       {
        text: 'NH',
        value: 'NH',
        id: 'NH'
       },
       {
        text: 'NJ',
        value: 'NJ',
        id: 'NJ'
       },
       {
        text: 'NM',
        value: 'NM',
        id: 'NM'
       },
       {
        text: 'NV',
        value: 'NV',
        id: 'NV'
       },
       {
        text: 'NY',
        value: 'NY',
        id: 'NY'
       },
       {
        text: 'OH',
        value: 'OH',
        id: 'OH'
       },
       {
        text: 'OK',
        value: 'OK',
        id: 'OK'
       },
       {
        text: 'OR',
        value: 'OR',
        id: 'OR'
       },
       {
        text: 'PA',
        value: 'PA',
        id: 'PA'
       },
       {
        text: 'RI',
        value: 'RI',
        id: 'RI'
       },
       {
        text: 'SC',
        value: 'SC',
        id: 'SC'
       },
       {
        text: 'SD',
        value: 'SD',
        id: 'SD'
       },
       {
        text: 'TN',
        value: 'TN',
        id: 'TN'
       },
       {
        text: 'TX',
        value: 'TX',
        id: 'TX'
       },
       {
        text: 'UT',
        value: 'UT',
        id: 'UT'
       },
       {
        text: 'VA',
        value: 'VA',
        id: 'VA'
       },
       {
        text: 'VT',
        value: 'VT',
        id: 'VT'
       },
       {
        text: 'WA',
        value: 'WA',
        id: 'WA'
       },
       {
        text: 'WI',
        value: 'WI',
        id: 'WI'
       },
       {
        text: 'WV',
        value: 'WV',
        id: 'WV'
       },
       {
        text: 'WY',
        value: 'WY',
        id: 'WY'
       }
    ]

        const sportOptions = this.props.sports.map(sport => {
            return {
                text: sport.name,
                value: sport.id,
                image: sport.image
            }
        });
        return (
            <Segment basic inverted>
                <Header textAlign='center' style={{ fontFamily: 'Rock Salt', fontSize: '40px' }}>{ this.props.match.params.id ? "Edit Post" : "New Post"}</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label style={{ color: 'white'}}>Select Sport</label>
                        <Dropdown
                            placeholder='Select Sport'
                            fluid
                            selection
                            value={sport_id}
                            options={sportOptions}
                            onChange={ (e, data) => this.setState({ sport_id: data.value })}
                        />
                    </Form.Field>
                        <Form.Field>
                        <label style={{ color: 'white'}}>State</label>
                        <Dropdown
                            placeholder='Select State'
                            fluid
                            selection
                            options={stateOptions}
                            onChange={ (e, data) => this.setState({ st: data.value })}
                        />
                    </Form.Field>
                  <Form.Field>
                    <label style={{ color: 'white'}}>Title</label>
                       <input type="text"
                           autoFocus
                           required
                           id='title'
                           value={title}
                           placeholder='Title'
                           onChange={this.handleChange}
                       />
                   </Form.Field>



                   <Form.Field>
                     <label style={{ color: 'white'}}>Zip</label>
                        <input type="text"
                            autoFocus
                            required
                            id='zip'
                            value={zip}
                            placeholder='Zip'
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                      <label style={{ color: 'white'}}>Street Address</label>
                         <input type="text"
                             autoFocus
                             required
                             id='streetAddress'
                             value={streetAddress}
                             placeholder='Street Address'
                             onChange={this.handleChange}
                         />
                     </Form.Field>
                     <Form.Field>
                       <label style={{ color: 'white'}}>City</label>
                          <input type="text"
                              autoFocus
                              required
                              id='city'
                              value={city}
                              placeholder='City'
                              onChange={this.handleChange}
                          />
                      </Form.Field>



                    <Form.Field>
                        <label style={{ color: 'white'}}>Description</label>
                        <input
                            required
                            id='post_body'
                            value={post_body}
                            placeholder='Post'
                            type='post_body'
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                      <Segment textAlign='center' basic>
                        <Button primary type='submit'>Submit</Button>
                        <Button type="button" onClick={this.toggleFunction()}>Cancel</Button>
                      </Segment>
                    </Form>
            </Segment>
    )
  }
}

const mapStateToProps = (state) => {
    return { sports: state.sports }
}

export default withRouter(connect(mapStateToProps)(PostForm));
