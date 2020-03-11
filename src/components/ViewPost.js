import React, {Component} from 'react';
import './assets/style/viewpost.css';
import {NavLink} from 'react-router-dom';
/*
 class ViewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                id: this.props.id,
                title: this.props.title,
                category: this.props.category,
                description: this.props.description,
                
           
            isEditing: false


        }
    }
}

    editPost = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    cancelEdit = () => {
        this.setState({isEditing: false})
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
        console.log(value, name)
    }
    handleSubmit= (e) => {
        e.preventDefault();
        this.setState({isEditing: false})
        const updatedPost = {...this.state.post}
        this.props.editPost(this.props.id, updatedPost);
        this.props.history.push('/');

    }

    

    render() {
        let {id, title, category, description} = this.state.post
        console.log(id, title, category, description)

        return (
            <div className="viewpost-container">
            <button className="back-to-posts__btn"><NavLink to="/">Back to Posts</NavLink></button>
            <h1>This is the Edit Posts</h1>
            {
                this.state.isEditing ? 
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleChange}/>

                    <input type="text" 
                    name="category" 
                    value={this.state.category}
                    onChange={this.handleChange}/>

                    <textarea type="text" 
                    name="description" 
                    value={this.state.description}
                    onChange={this.handleChange}/>

                    <button>Save</button>
                    <button onClick={this.cancelEdit}>Cancel</button>



                </form>
             :
            <div>
            <h3>Id: {id}</h3>
            <h3>Title: {title}</h3>
            <h3>Category: {category}</h3>
            <h3>Description: {description}</h3>
            <div className="buttons-wrapper">
            <button onClick={this.editPost}>Edit</button>
            <button>Delete</button>
            </div>
            </div>
            }


        </div>
        )
    }
}

export default ViewPost*/


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
