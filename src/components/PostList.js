import React from 'react';
import PostItem from './PostItem';
import '../assets/style/postlist.css';
import {NavLink} from 'react-router-dom';


const PostList = (props) => {
  let postList = props.posts.map((post) => (
    <PostItem key={post.id} post={post} />
  ))

          return (
            <div class="container-blog">
            <h1 className="blog-header">Blog Posts</h1>
            <div className="add-post-container">
              <NavLink to='/addpost' className="add-post-link">Add Post</NavLink>
              </div>
            <div className="posts-wrapper">
               {postList}
            </div>
            </div>

    

          )
}
       
export default PostList
