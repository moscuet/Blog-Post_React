import React from 'react';
import PostItem from './PostItem';
import './assets/style/postlist.css';
import {NavLink} from 'react-router-dom';


const PostList = (props) => {
  console.log(props)
  let postList = props.posts.map((post) => (
    <PostItem key={post.id}
              title={post.title}
              category={post.category}
              description={post.description} />
  ))

          return (
            <div className="posts-wrapper">
               {postList}
            </div>
    

          )
}
       
export default PostList
