import React from 'react';
import {NavLink} from 'react-router-dom';


const PostItem = (props) => {
    let {title, description} = props;
    return (
        <div>
            <div>
            <ul>
                <h2>{title}</h2>
                <p>{description}</p>
                <li><NavLink to="/editposts">Edit Post</NavLink></li>
                
            </ul>
            </div>
        </div>
    )
}

export default PostItem;