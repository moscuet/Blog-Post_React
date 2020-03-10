import React from 'react';
import PostItem from './PostItem';
import './assets/style/postlist.css';
import {NavLink} from 'react-router-dom';


const PostList = (props) => {
  console.log(props)
  let postList = props.posts.map((post) => (
    <PostItem post={post} />
  ))

          return (
            <div className="posts-wrapper">
               {postList}
            </div>
    

          )
}
       
export default PostList
