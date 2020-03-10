import React from 'react';
import {NavLink} from 'react-router-dom';
import './assets/style/postitem.css'


const PostItem = ({title, category, description}) => {
    return (
            <div className="post-item__container">
            <ul className="post-item__wrapper">
                <h2 className="post-title">{title}</h2>
                <h2 className="post-category">{category}</h2>
                <p className="post-description">{description}</p>
                
            </ul>
            </div>
    )
}

export default PostItem;