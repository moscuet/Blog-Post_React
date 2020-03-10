import React from 'react';
import PostItem from './PostItem';


const PostList = (props) => {
  console.log(props)
  let postList = props.posts.map((post) => (
    <PostItem key={post.id}
              title={post.title}
              category={post.category}
              description={post.description} />
  ))

          return (
            <div>
               {postList}
          </div>
    

          )
}
       
export default PostList
