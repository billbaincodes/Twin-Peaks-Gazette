import React from 'react'

const Post = ({ post }) => {
  return(
    <article className="post">
      <header className="post-head">
        <address>
          <h4>{post.name}</h4>
          <h4>{post.handle}</h4>
        </address>
        <img src={post.avatarURL} alt="avatar" />
      </header>
      <main className="post-body">
        <h3>{post.title}</h3>
        <img src={post.imageURL} alt="post" />
        <p>{post.body}</p>
      </main>
    </article>
  )
}

export default Post