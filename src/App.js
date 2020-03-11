import React, {Component} from 'react';
import './App.css';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import ViewPost from './components/ViewPost';
import EditPost from './components/EditPost';
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
            posts: blogData
            
          }


  }

  addPost = (newPost) => {
    this.setState({posts: [...this.state.posts, newPost]})
    console.log(newPost)
  }

  deletePost = (e) => {
    console.log(e.target.props)
    const unDeletedPosts = this.state.posts.filter((post) => post.id !== e.target.id)
    this.setState({posts: unDeletedPosts})

  }
  
  editPost = (newPost,id) => {
    const newPosts= this.state.posts.map( (post) => {
     return post.id === id ? newPost:post
    })
    this.setState({posts:newPosts})
    console.log(this.state.posts)
    }



  render() {

    return  (
      <BrowserRouter>

      <div className="App">

            <Switch>
            <Route path="/addpost" component={(props)=><AddPost {...props} addPost={this.addPost}/>} />
            <Route path={`/viewpost/:id`} component={(props)=><ViewPost posts={this.state.posts} id={props.match.params.id} {...props}
            deletePost={this.deletePost} />}/>
            <Route path={`/editpost/:id`} component={(props)=><EditPost {...props} posts={this.state.posts} id={props.match.params.id} editPost={this.editPost}/>}/>
            <Route path="/" component={()=><PostList posts={this.state.posts} />} />
            </Switch>

      </div>
      </BrowserRouter>

    );
  }
  }


export default App;
