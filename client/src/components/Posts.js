import React from 'react';
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts';

class Posts extends React.Component {

    componentDidMount() {
        this.props.dispatch(getPosts());
    }


    displayPosts = () => {
        return this.props.posts.map( post => {
            return(
                <div key={post.id}>
                    <h4>{post.title}</h4>
                </div>
            )
        })
    }
    
    render () {
        console.log(this.props.posts)
        return (
            <div> 
                {this.displayPosts()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(Posts);