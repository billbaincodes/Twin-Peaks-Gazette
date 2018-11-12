import React from "react";

const NewTweet = ({ submitTweet }) => {
  return (
    <form className="new-tweet">
      <fieldset className="new-tweet-field">
        <legend>Submit New Tweet</legend>
        <label htmlFor="size_1">Subject: </label>
        <br />
        <input className="form-field" type="text" name="subject" id="subject" />
        <br />
        <label htmlFor="size_2">Body: </label>
        <br />
        <textarea className="form-field" name="body" id="body" rows="6" cols="46" />
        <br />
        <label htmlFor="size_3">Image Upload: </label>
        <br />
        <input className="form-field" type="file" name="imageURL" id="subject" />
        <br />
        <button onClick={submitTweet} type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default NewTweet;
