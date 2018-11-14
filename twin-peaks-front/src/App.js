import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import NewTweet from './components/NewTweet'
import Feed from './components/Feed'
import Profile from './components/Profile'

class App extends Component {

  state = {
    postList : [],
    newTweet : false
  }

  componentDidMount(){
    fetch('http://localhost:3333/posts')
    .then(response => response.json())
    .then(json => this.setState({ postList : json.posts })
  )}

  newTweetRender = () => {
    this.setState({ newTweet : !this.state.newTweet})
  }

  postTweet = (tweet) => {
    console.log(tweet)
    if (tweet.subjectVal.length === 0 || tweet.subjectVal.length === 0) {
      alert('Please enter a body and title')
    }
    else {
      fetch("http://localhost:3333/posts", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "title": tweet.subjectVal,
          "body": tweet.bodyVal,
          "imageURL": tweet.URLVal,
          "character_id": 4 
        })
      })
      .then(response => response.json())
      this.setState({ newTweet: false })
    }
  }
  
  render() {
    return (
      <div >
        <Header newTweetRender={this.newTweetRender}/>
        {this.state.newTweet ? <NewTweet postTweet={this.postTweet}/> : ''}
        <main className="site">
          <Feed postList={this.state.postList}/>
          <Profile newTweetRender={this.newTweetRender}/>
        </main>
      </div>
    )
  }

}

export default App
