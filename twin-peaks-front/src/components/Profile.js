import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTweet: undefined
    }
  }

  tweetSelector = event => {
    this.setState({ selectedTweet: event.target.value })
  }

  deletePasser = () => {
    this.state.selectedTweet === undefined
      ? alert("Invalid selection")
      : this.props.deleteTweet(this.state.selectedTweet)
  }


  render() {
    return (
      <aside className="profile">
        <header className="profile-head">
          <address>
            <h4>Welcome back, Dale Cooper!</h4>
            <h4>@DamnFineCoffee</h4>
          </address>
          <img
            className="profile-pic"
            src="https://vignette.wikia.nocookie.net/p__/images/3/3a/Cooper_005.jpg/revision/latest?cb=20170928134456&path-prefix=protagonist"
            alt="profile"
          />
        </header>
        <section className="profile-buttons">
          <button onClick={this.props.newTweetRender}>New Tweet</button>
          <br />
          <br />
          <select onChange={this.tweetSelector}>
            <option selected>
              Select a Tweet:
            </option>
            {this.props.postList
              .filter(post => post.character_id === 4)
              .map(post => (
                <option key={post.post_id} value={post.post_id}>
                  {post.title}
                </option>
              ))}
          </select>
          <button onClick={this.deletePasser}> Delete</button>
        </section>
      </aside>
    )
  }
}

export default Profile
