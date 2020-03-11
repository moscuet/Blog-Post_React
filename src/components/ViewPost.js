import React from 'react';
import '../assets/style/viewpost.css';
import {NavLink} from 'react-router-dom';

const ViewPost = (props) => {
    let {posts, id} = props;
 

    const filteredPosts = posts.filter((post) => {
        return post.id === id
    })

    
  
    return (
        <div className="viewpost-wrapper">
        <div className="viewpost-container">
            <div className="back-to-top__btn__wrapper">
            <button className="back-to-posts__btn"><NavLink to="/" className="back-to-posts__link">Back to Post</NavLink></button>
            </div>
            <div className="header-container">
            <h3>{filteredPosts[0].title}</h3>
                <h3>Title: {filteredPosts[0].category}</h3>
                </div>
                <p>Category: {filteredPosts[0].description}</p>
            <div className="buttons-wrapper">
               
            <NavLink to={`/editpost/${id}`}> <button id={id} onClick={props.editPost} className="btn-edit"> Edit Post </button></NavLink>
            <NavLink to ='/'><button id={id} onClick={props.deletePost} className="btn-delete">Delete</button></NavLink>
            
            </div>
            </div>

        </div>
    )
}

export default ViewPost;
