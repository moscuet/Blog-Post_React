import React from 'react';
import {NavLink} from 'react-router-dom';

const EditPost = (props) => {
    let {posts, id} = props
    console.log(posts, id)

    
    const filteredPosts = posts.filter((post) => {
        return post.id === id
    })
    return (
        <div>
            <h1>Edit Post</h1>
            <input type="text" 
            name="title" 
            value={filteredPosts[0].title}
            onChange={props.handleChange}
            id={id}/>

            <input type="text" 
            name="category" 
            value={filteredPosts[0].category}
            onChange={props.handleChange}/>

            <textarea type="text" 
            name="description" 
            value={filteredPosts[0].description}
            onChange={props.handleChange}/>

            <div className="buttons-wrapper"></div>
            <button>Save</button>
            <NavLink to ="/"><button>Cancel</button></NavLink>

            
        </div>
    )
}

export default EditPost;

