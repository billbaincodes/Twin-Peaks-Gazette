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

  submitTweet = (event) => {
    event.preventDefault()
    this.setState({ newTweet : false})
    console.log(event.target)
  }

  
  render() {
    return (
      <div className="App">
        <Header newTweetRender={this.newTweetRender}/>
        {this.state.newTweet ? <NewTweet submitTweet={this.submitTweet}/> : ''}
        <Feed postList={this.state.postList}/>
      </div>
    )
  }

}

export default App
