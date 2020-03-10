import React, {Component} from 'react';
import './App.css';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import ViewPost from './components/ViewPost';
import { v4 as uuidv4 } from 'uuid';



import {BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Prompt,
  Redirect

} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
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
      ]
      

    }
  }

  addPost = (newPost) => {
    this.setState({posts: [...this.state.posts, newPost]})
    console.log(newPost)
  }

  render() {
  
    return (
      <BrowserRouter>

      <div className="App">
           <ul className="nav-links">
              <NavLink to='/addpost' onClick={this.handleClick}>Add Post</NavLink>
          </ul>

            <Switch>
            <Route path="/addpost" component={(props)=><AddPost {...props} addPost={this.addPost}/>} />
            {/* <Route path="/editpost/:id" component={<ViewPost post={props.match.params.id}/>}/>  */}
            <Route path="/" component ={(props)=><PostList posts={this.state.posts} />} />  
            </Switch>
         
      </div>
      </BrowserRouter>

    );
  }
  }
 

export default App;
