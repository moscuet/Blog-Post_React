import {NavLink} from 'react-router-dom';
import React, { Component } from 'react'
import '../assets/style/form.css';
import '../assets/style/editpost.css';

class EditPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
                post: {
                   title: '',
                   category: '',
                   description: ''
                 }
                 
        }
       
    }

     handleSubmit = (e) => {
         e.preventDefault();
         this.props.editPost(this.state.post, this.props.id);
         this.props.history.push('/');


     }

    
    handleChange = (e) => {
        let {name, value} = e.target;
        const post = {...this.state.post,[name]: value}
        this.setState({post})
        
    }

  
    componentDidMount(){
        const {posts, id} = this.props
        const filteredPosts = posts.filter((post) => {
         return post.id === id
     })
     this.setState({post: filteredPosts[0]})
    }
    render() {
        
        let {title, category, description} = this.state.post;
        
        return (
            <div>
            <form onSubmit={this.handleSubmit} className="form">
            <input type="text" 
            name="title" 
            value={title}
            onChange={this.handleChange}/>

            <select name="category" value={category} onChange={this.handleChange}>
                <option value=''>----Select Category</option>
                <option value='Work'>Work</option>
                    <option value='Entertainment'>Entertainment</option>
                    <option value='Travel'>Travel</option>
                    <option value='Sport'>Sport</option>
                    <option value='Other'>Other</option>
            </select>

            <textarea type="text" 
            name="description" 
            value={description}
            onChange={this.handleChange}/>

            <div className="buttons-wrapper">
            <button className="btn-save">Save</button>
            <NavLink to ="/" className="nav-cancel"><button className="btn-cancel">Cancel</button></NavLink>
            </div>

            
        </form>
            </div>
        )
    }
}

export default EditPost
