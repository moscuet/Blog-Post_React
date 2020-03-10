import React from 'react';
import {NavLink} from 'react-router-dom';
import './assets/style/postitem.css'


const PostItem = ({title, category, description}) => {
    return (
            <div className="post-item__container">
            <ul className="post-item__wrapper">
                <h2>{title}</h2>
                <h2>{category}</h2>
                <p>{description}</p>
                <li><NavLink to="/editpost" className="edit-link">Edit Post</NavLink></li>
                
            </ul>
            </div>
    )
}

export default PostItem;