import React from 'react';
import {NavLink} from 'react-router-dom';

const EditPost = () => {
    return (
        <div>
            <li> <NavLink to='/'>Back to Posts</NavLink></li>
            <h1>This is the Edit Post</h1>
        </div>
    )
}

export default EditPost;