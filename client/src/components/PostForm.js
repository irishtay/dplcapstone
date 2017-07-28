import React from 'react';
import { Button, Form, Segment, Header, Dropdown } from 'semantic-ui-react'
import { handlePostForm, updatePost } from '../actions/posts';
import { connect } from 'react-redux'
import { getSports } from '../actions/sports';
import { withRouter } from 'react-router-dom'

class PostForm extends React.Component {
    state = { title: '', post_body: '', st: '', sport_id: '' }

    componentDidMount() {

        this.props.dispatch(getSports());
        if (this.props.postInfo) {
            const { title, post_body, state } = this.props.postInfo;
            if(this.props.match.params.id) {
                this.setState({ title, post_body, sport_id: this.props.match.params.id, st: state  });
            }
            this.setState({ title, post_body, sport_id: this.props.sport_id, st: state })
        }
    }


  handleSubmit = (e) => {
    e.preventDefault();

    const { title, post_body, st, sport_id, id } = this.state;
      if (id)
        this.props.dispatch(updatePost(title, post_body, st, sport_id, id, this.props.cancel(id) ))
      else
        this.props.dispatch(handlePostForm(title, post_body, st, sport_id, this.props.history))
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

    render () {
        const { title, post_body, st, sport_id, id } = this.state;

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
                <Header as='h1' textAlign='center' style={{ fontFamily: 'Rock Salt' }}>{ id ? "Edit Post" : "New Post"}</Header>
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
<<<<<<< HEAD
                        <label>State</label>
                        <Dropdown
                            placeholder='Select State'
                            fluid
                            selection
                            value={st}
                            options={stateOptions}
                            onChange={ (e, data) => this.setState({ st: data.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                     <label>Title</label>
=======
                     <label style={{ color: 'white'}}>Title</label>
>>>>>>> 2a7fe17bca3a9e396b40ea39fe32cc45f8a49e51
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
<<<<<<< HEAD
                        <label>Description</label>
=======
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
                        <label style={{ color: 'white'}}>Description</label>
>>>>>>> 2a7fe17bca3a9e396b40ea39fe32cc45f8a49e51
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
                        <Button type="button" onClick={() => this.props.cancel(id)}>Cancel</Button>
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
