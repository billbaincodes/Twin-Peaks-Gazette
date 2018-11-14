import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import NewTweet from './components/NewTweet'
import Feed from './components/Feed'
import Profile from './components/Profile'

class App extends Component {

  state = {
    postList : [],
    userList: [],
    newTweet : false
  }

  componentDidMount(){
    this.dataFetcher()
  }

  dataFetcher = () => {
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
      .then(this.dataFetcher)
      this.setState({ newTweet: false })
    }
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
      .then(this.dataFetcher)
      this.setState({ newTweet: false })
    }
  }

  deleteTweet = (tweetID) => {

    fetch(`http://localhost:3333/posts/${tweetID}`, {
      method: "DELETE",
      mode: "cors",
      headers : {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(this.dataFetcher)
    .catch(console.log('error'))

  }
  
  render() {
    return (
      <div >
        <Header newTweetRender={this.newTweetRender}/>
        {this.state.newTweet ? <NewTweet postTweet={this.postTweet}/> : ''}
        <main className="site">
          <Feed postList={this.state.postList}/>
          <Profile newTweetRender={this.newTweetRender}
                    postList={this.state.postList}
                    deleteTweet={this.deleteTweet}
          />
        </main>
      </div>
    )
  }

}

export default App
