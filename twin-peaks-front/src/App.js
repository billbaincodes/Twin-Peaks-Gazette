import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import NewTweet from './components/NewTweet'

class App extends Component {

  state = {
    newTweet : false
  }

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
      </div>
    )
  }

}

export default App
