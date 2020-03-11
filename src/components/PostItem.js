import React from 'react';
import {NavLink} from 'react-router-dom';
import './assets/style/postitem.css'


const PostItem = (props) => {
    let {id, title, category} = props.post
    console.log(id)

    return (

            <div className="post-item__container" >
            <ul className="post-item__wrapper">
                <h2 className="post-title">{title}</h2>
                <h2 className="post-category">{category}</h2>
                <button className="view-link"><NavLink to={`/viewpost/${id}`} className="link">View Post</NavLink></button> 
                
            </ul>
            </div>
    )
}

export default PostItem;