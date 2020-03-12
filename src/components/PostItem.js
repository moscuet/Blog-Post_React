import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/style/postitem.css'


const PostItem = (props) => {
    let {id, title, category} = props.post

    let postStyles = [
        {backgroundColor: 'var(--blue)'},
        {backgroundColor: 'var(--yellow)'},
        {backgroundColor: 'var(--green)'},
        {backgroundColor: 'var(--violet)'},
        {backgroundColor: 'var(--brown)'}
    
    ]
    
    let index = 0;
    if(category.toLowerCase().includes('work')) {
        postStyles = postStyles[index];
    } else if(category.toLowerCase().includes('entertainment')) {
        index = index +1
        postStyles = postStyles[index]
    } else if(category.toLowerCase().includes('travel')) {
        index = index +2
        postStyles = postStyles[index];
    }    else if(category.toLowerCase().includes('sport')) {
        index = index +3
        postStyles = postStyles[index]
    } else {
        index = index +4
        postStyles = postStyles[index]

    }
    return (

            <div className="post-item__container grow" style={postStyles} >
            <div className="post-item__wrapper">
                <h3 className="post-title">{title}</h3>
                <h3 className="post-category">{category}</h3>
                <div className="read-links__wrapper">
                <NavLink to={`/viewpost/${id}`} className="link">

                <button className="btn-read__more">Read</button>
                     <i className="fab fa-readme grow2"></i>
                     </NavLink>
                </div>
            </div>
            </div>
           

    )
}

export default PostItem;