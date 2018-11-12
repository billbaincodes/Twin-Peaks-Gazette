import React from 'react'

const Post = ({ post }) => {
  return(
    <article className="post">
      <h3>{post.title}</h3>
      <img src={post.imageURL} />
      <p>{post.body}</p>
    </article>
  )
}

export default Post