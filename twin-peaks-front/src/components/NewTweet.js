import React, {Component} from "react"

class NewTweet extends Component {

  constructor(props) {
    super(props)
    this.state = {
      subjectVal: "",
      bodyVal: "",
      URLVal: ""
    }
  }

  submitTweet = (event) => {
    event.preventDefault()
    this.props.postTweet(this.state)
  }

  subjectListener = (event) => {
    this.setState({ subjectVal : event.target.value })
  }

  bodyListener = (event) => {
    this.setState({ bodyVal : event.target.value })
  }

  URLListener = (event) => {
    this.setState({ URLVal : event.target.value })
  }

  render() {
    return (
      <form className="new-tweet">
        <fieldset className="new-tweet-field">
          <legend>Submit New Tweet</legend>
          <label htmlFor="size_1">Subject: </label>
          <br />
          <input className="form-field" onChange={this.subjectListener} type="text" name="subject" id="subject" value={this.state.subjectVal}/>
          <br />
          <label htmlFor="size_2">Body: </label>
          <br />
          <textarea className="form-field" onChange={this.bodyListener} name="body" id="body" rows="6" cols="46" value={this.state.bodyVal}/>
          <br />
          <label htmlFor="size_3">Image URL: </label>
          <br />
          <input className="form-field" onChange={this.URLListener} type="text" name="imageURL" id="imageURL" value={this.state.URLVal}/>
          <br />
          <button onClick={this.submitTweet} type="submit">Submit</button>
        </fieldset>
      </form>
    )
  }
}

export default NewTweet
