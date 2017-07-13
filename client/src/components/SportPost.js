import React from 'react';

const SportPost = (props) => {
    const { postInfo } = props;
    return(
        <div>
            <h1>{ postInfo.title }</h1>
        </div>
    )
}

export default SportPost;