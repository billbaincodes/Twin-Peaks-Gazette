import React from 'react'

const Header = ({ newTweetRender }) => {

    return (
      <div className="header">
        <h1>Twin Peaks Gazette</h1>
        <button onClick={newTweetRender}>New Tweet</button>
      </div>
    )

}

export default Header