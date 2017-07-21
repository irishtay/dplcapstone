import React from 'react';
import { Button, Form, Segment, Header, Dropdown } from 'semantic-ui-react'
import { handlePostForm, updatePost } from '../actions/posts';
import { connect } from 'react-redux'

class PostForm extends React.Component {
    state = { title: '', post_body: '', state: '', sport_id: '' }

    componentDidMount() {
        if (this.props.postInfo)
          this.setState({ ...this.props.postInfo })
    }


  handleSubmit = (e) => {
    e.preventDefault();

    const { title, post_body, state, sport_id, id } = this.state;
      if (id)
        this.props.dispatch(updatePost(title, post_body, state, sport_id, id, this.props.toggleEdit ))
      else
        this.props.dispatch(handlePostForm(title, post_body, state, sport_id, this.props.history))
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

    render () {
        const { title, post_body, state, sport_id } = this.state;

        const sportOptions = [
            {
                text: 'Baseball',
                value: '1',
                image: { avatar: true, src: 'http://res.cloudinary.com/dxvd6262z/image/upload/v1499533016/BaseballCard_xnqnrj.png' },
            },
            {
                text: 'Basketball',
                value: '2',
                image: { avatar: true, src: 'http://res.cloudinary.com/dxvd6262z/image/upload/v1499533023/BasketBallCard_k0ctzv.png' },
            },
            {
                text: 'Football',
                value: '3',
                image: { avatar: true, src: 'http://res.cloudinary.com/dxvd6262z/image/upload/v1499533110/FootballCard_yxvsqf.png' },
            },
            {
                text: 'Golf',
                value: '4',
                image: { avatar: true, src: 'http://res.cloudinary.com/dxvd6262z/image/upload/v1499533097/GolfCard_cbfal8.png' },
            },
            {
                text: 'Quidditch',
                value: '5',
                image: { avatar: true, src: 'http://res.cloudinary.com/dxvd6262z/image/upload/v1499533066/QuiddichCard_hjtlqc.png' },
            },
            {
                text: 'Rockclimbing',
                value: '6',
                image: { avatar: true, src: 'http://res.cloudinary.com/dxvd6262z/image/upload/v1499533081/RockClimbingCard_otga6x.png' },
            },
            {
                text: 'Soccer',
                value: '7',
                image: { avatar: true, src: 'http://res.cloudinary.com/dxvd6262z/image/upload/v1499533102/SoccerCard2_rtlpwn.png' },
            },
            {
                text: 'Tennis',
                value: '8',
                image: { avatar: true, src: 'http://res.cloudinary.com/dxvd6262z/image/upload/v1499533114/TennisCard_vm9cwy.png' },
            },
]
        return (
            <Segment basic>
                <Header as='h1' textAlign='center'>New PostForm</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Select Sport</label>
                        <Dropdown
                            placeholder='Select Sport'
                            fluid
                            selection
                            options={sportOptions}
                            onChange={ (e, data) => this.setState({ sport_id: data.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                     <label>Title</label>
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
                        <label>Description</label>
                        <input
                            required
                            id='post_body'
                            value={post_body}
                            placeholder='Post'
                            type='post_body'
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>State</label>
                        <input
                            required
                            id='state'
                            value={state}
                            placeholder='State'
                            type='state'
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                <Segment textAlign='center' basic>
                <Button primary type='submit'>Submit</Button>
                </Segment>
        </Form>
      </Segment>
    )
  }
}

export default connect()(PostForm);
