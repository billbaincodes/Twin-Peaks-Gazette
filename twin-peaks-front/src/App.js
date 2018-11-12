import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import NewTweet from './components/NewTweet'
import Feed from './components/Feed'

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
    this.setState({ newTweet : true})
  }

  postTweet = (tweet) => {
    console.log(tweet)
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
        "character_id": 1 
      })
    })
    .then(response => response.json())
    this.setState({ newTweet: false })
  }

  
  render() {
    return (
      <div className="App">
        <Header newTweetRender={this.newTweetRender}/>
        {this.state.newTweet ? <NewTweet postTweet={this.postTweet}/> : ''}
        <Feed postList={this.state.postList}/>
      </div>
    )
  }

}

export default App
