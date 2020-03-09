import React, {Component} from 'react';
import './App.css';
import PostItem from './components/PostItem';
import EditPost from './components/EditPost';
import AddPost from './components/AddPost';


import {BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Prompt,
  Redirect

} from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [
        {
          title: 'Day in School',
          description: 'This was my first day in school. Cool!'
        },
        {
          title: 'Day at the beach',
          description: 'This was my first day in school. Cool!'
        },
        {
          title: 'Day at the bar',
          description: 'This was my first day in school. Cool!'
        },
        {
          title: 'Day in a funeral',
          description: 'This was my first day in school. Cool!'
        }
      ]
    }
  }
  render() {
    let postList = this.state.posts.map((post) => (
      <PostItem title={post.title}
                description={post.description} />
    ))
    return (
      <BrowserRouter>

      <div className="App">
          <ul>
            <li> <NavLink to='/'>Posts</NavLink></li>
            {/* <li> <NavLink to='/editposts'>Edit Post</NavLink></li> */}
            <li> <NavLink to='/addpost'>Add Post</NavLink></li>
          </ul>
          <Switch>
            <Route path="/editposts"><EditPost /></Route>
            <Route path="/addpost"><AddPost /></Route>
            <Route path="/"><PostItem /></Route>
  
          </Switch>
  
          <div>
            {postList}
          </div>
      </div>
      </BrowserRouter>

    );
  }
  }
 

export default App;
