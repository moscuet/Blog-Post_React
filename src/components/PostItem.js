import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/style/postitem.css'


const PostItem = (props) => {
    let {id, title, category} = props.post
    console.log(id)

    let postStyles = [
        {backgroundColor: 'rgba(61, 117, 170, 0.7)'},
        {backgroundColor: 'rgba(224, 222, 51, 0.7)'},
        {backgroundColor: 'rgba(51, 224, 94, 0.7)'},
        {backgroundColor: 'rgba(224, 51, 146, 0.7)'},
        {backgroundColor: 'rgba(51, 204, 224, 0.7)'}
    
    ]
    
    let index = 0;
    if(category.includes('Work')) {
        postStyles = postStyles[index];
    } else if(category.includes('Speech')) {
        index = index +1
        postStyles = postStyles[index]
    } else if(category.includes('Recration')) {
        index = index +2
        postStyles = postStyles[index];
    }    else if(category.includes('Sport')) {
            index = index +3
            postStyles = postStyles[index]
    } else {
        index = index +3
        postStyles = postStyles[index]

    }
    return (

            <div className="post-item__container grow" style={postStyles} >
            <ul className="post-item__wrapper">
                <h3 className="post-title">{title}</h3>
                <h3 className="post-category">{category}</h3>
                <NavLink to={`/viewpost/${id}`} className="link"><i class="fab fa-readme fa-2x grow2"></i></NavLink>
                
            </ul>
            </div>
    )
}

export default PostItem;