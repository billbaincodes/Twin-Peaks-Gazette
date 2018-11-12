import React from 'react'

const Header = ({ newTweetRender }) => {

    return (
      <div className="header">
        <h1>Become one with inner selfness</h1>
        <button onClick={newTweetRender}>New Tweet</button>
      </div>
    )

}

export default Header