import React, {Component} from 'react';
import '../assets/style/form.css';
import { v4 as uuidv4 } from 'uuid';
import {NavLink} from 'react-router-dom';


class AddPost extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            post: 
                {
                    title: '',
                    category: '',
                    description: ''
                }
         
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        let newPost = {id: uuidv4(), ...this.state.post};
        this.props.addPost(newPost)
        this.props.history.push('/');


      
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        const post = {...this.state.post,[name]: value}
        this.setState({post})
       

    }
    render() {

        let {title, category, description} = this.state;

        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-topics">
                    <div>
                    <label className="title-category">Title</label>
                    <input type="text" name="title"
                    value={title} placeholder="title" 
                    onChange={this.handleChange}></input>
                    </div>
                    <div>
                    <label className="title-category">Category</label>
                    {/* <input type="text" 
                    name="category" 
                    value={category}
                    placeholder="category" 
                    onChange={this.handleChange}></input> */}
                     <select name="category" value={category} onChange={this.handleChange}>
                        <option value=''>----Select Category</option>
                        <option value='Work'>Work</option>
                        <option value='Speech'>Speech</option>
                        <option value='Recreation'>Recreation</option>
                        <option value='Sport'>Sport</option>
                        <option value='Other'>Other</option>
                    </select>
                    </div>
                    </div>
                    
                    <label>Write a New Post</label>
                    <textarea type="text" 
                    name="description"
                    category={description} 
                    placeholder="write here" 
                    onChange={this.handleChange}></textarea>

                    <div className="buttons-wrapper">
                    <button onClick={this.addPost} className="btn-save">Save</button>
                    <NavLink to ="/" className="btn-cancel">Cancel</NavLink>
                    </div>
    
    
                </form>
            </div>
        )
    }
    }
    

export default AddPost;