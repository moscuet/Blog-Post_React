import React from 'react';
import PostItem from './PostItem';
import './assets/style/postlist.css';
import {NavLink} from 'react-router-dom';


const PostList = (props) => {
  let postList = props.posts.map((post) => (
    <PostItem key={post.id} post={post} />
  ))

          return (
            <div>
              <NavLink to='/addpost'>Add Post</NavLink>

            <div className="posts-wrapper">
               {postList}
            </div>
            </div>

    

          )
}
       
export default PostList
