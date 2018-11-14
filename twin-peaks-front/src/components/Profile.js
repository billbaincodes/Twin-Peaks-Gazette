import React from 'react'

const Profile = ({newTweetRender}) => {
  return(
    <aside className="profile">
      <header className="profile-head">
        <address>
          <h4>Welcome back, Dale Cooper!</h4>
          <h4>@DamnFineCoffee</h4>
        </address>
        <img className="profile-pic" src="https://vignette.wikia.nocookie.net/p__/images/3/3a/Cooper_005.jpg/revision/latest?cb=20170928134456&path-prefix=protagonist" alt="profile"></img>
      </header>
      
        <button onClick={newTweetRender}>New Tweet</button>

    </aside>
  )
}

export default Profile