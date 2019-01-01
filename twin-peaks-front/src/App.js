import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import NewTweet from "./components/NewTweet"
import Feed from "./components/Feed"
import Profile from "./components/Profile"

class App extends Component {
  state = {
    postList: [],
    userList: [],
    currentUser: 4,
    newTweet: false
  }

  componentDidMount() {
    this.postFetcher()
    fetch("https://tp-classic-back.herokuapp.com/characters")
    .then(response => response.json())
    .then(json => this.setState({userList : json.characters }))
  }

  postFetcher = () => {
    fetch("https://tp-classic-back.herokuapp.com/posts")
      .then(response => response.json())
      .then(json => this.setState({ postList: json.posts }))
  }

  newTweetRender = () => {
    this.setState({ newTweet: !this.state.newTweet })
  }

  changeUser = (event) => {
    console.log(this.state.userList, event.target.value)
    console.log(this.state.userList.filter(user => user.id == event.target.value))
    this.setState({currentUser : parseInt(event.target.value) })
  } 


  postTweet = tweet => {
    if (tweet.subjectVal.length === 0 || tweet.bodyVal.length === 0) {
      alert("Please enter a body and title");
    } else {
      fetch("https://tp-classic-back.herokuapp.com/posts", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: tweet.subjectVal,
          body: tweet.bodyVal,
          imageURL: tweet.URLVal,
          character_id: 4
        })
      })
        .then(response => response.json())
        .then(this.postFetcher);
      this.setState({ newTweet: false });
    }
  }

  deleteTweet = tweetID => {
    fetch(`https://tp-classic-back.herokuapp.com/posts/${tweetID}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(this.postFetcher)
      .catch(console.log("error"))
  }

  render() {
    return (
      <div>
        <Header userList={this.state.userList} 
                changeUser={this.changeUser}
                currentUser={this.state.currentUser}
        />
        {this.state.newTweet ? <NewTweet postTweet={this.postTweet} /> : ""}
        <main className="site">
          <Feed postList={this.state.postList} />
          <Profile
            newTweetRender={this.newTweetRender}
            postList={this.state.postList}
            deleteTweet={this.deleteTweet}
          />
        </main>
      </div>
    )
  }
}

export default App
