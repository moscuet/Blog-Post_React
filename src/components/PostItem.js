import React from 'react';
import {NavLink} from 'react-router-dom';
import './assets/style/postitem.css'
import { v4 as uuidv4 } from 'uuid';


const PostItem = (props) => {
    let {id, title, category} = props.post
    console.log(id)
   console.log(props)

    return (

            <div className="post-item__container" >
            <ul className="post-item__wrapper">
                <h2 className="post-title">{title}</h2>
                <h2 className="post-category">{category}</h2>
                {/* <button><NavLink to={`viewpost/${}`}>View Post</NavLink></button> */}
                
            </ul>
            </div>
    )
}

export default PostItem;