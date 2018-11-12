import React from 'react'
import Post from './Post'


const Feed = ({ postList }) => {

  return (
    <section className="feed">
      {postList.map(post => <Post key={post.post_id} post={post}/>)}
    </section>
  )
  
}

export default Feed