import React, {Component} from 'react';
import './App.css';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import ViewPost from './components/ViewPost';
// import { v4 as uuidv4 } from 'uuid';
import {blogData} from './components/blogData';



import {BrowserRouter,
  Route,
  NavLink,
  Switch,
  

} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: blogData/*[
        {
          id: uuidv4(),
          title: 'Day at school',
          category: 'Work',
          description: 'This was my first day in school. Cool!'
        },
        {
          id: uuidv4(),
          title: 'Day at the beach',
          category: 'Work',
          description: 'This was my first day in school. Cool!'
        },
        {
          id: uuidv4(),
          title: 'Day at the bar',
          category: 'Work',
          description: 'This was my first day in school. Cool!'
        },
        {
          id: uuidv4(),
          title: 'Day at a funeral',
          category: 'Work',
          description: 'This was my first day in school. Cool!'
        }
      ]*/
      

    }
  }

  addPost = (newPost) => {
    this.setState({posts: [...this.state.posts, newPost]})
    console.log(newPost)
  }

  deletePost = (id) => {
    const unDeletedPosts = this.state.posts.filter((post) => post.id !== this.state.id)
    this.setState({posts: unDeletedPosts})
    console.log(this.state.unDeletedPosts)
    console.log(unDeletedPosts)

  }
  editPost = (id, updatedPost) => {
      const updatedPosts = this.state.posts.map((post) => {
        if(post.id === id) {
            return {...post, post: updatedPost }
        }
        return post
      })
      this.setState({posts: updatedPosts})
  }

  render() {
    console.log(this.state.posts)
    return  (
      <BrowserRouter>

      <div className="App">
        
            <Switch>
            <Route path="/addpost" component={(props)=><AddPost {...props} addPost={this.addPost}/>} />
            <Route path={`/viewpost/:id`} component={(props)=><ViewPost posts={this.state.posts} id={props.match.params.id} {...props}
            deletePost={() =>this.deletePost}
            editPost={()=> this.editPost}/>}/> 
            <Route path="/" component={()=><PostList posts={this.state.posts} />} />  
            </Switch>
         
      </div>
      </BrowserRouter>

    );
  }
  }
 

export default App;
