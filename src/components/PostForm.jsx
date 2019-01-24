import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    const post = {
      title,
      body
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log("data", data));
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title</label> <br />
            <input
              name="title"
              onChange={this.onChange}
              value={this.state.title}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="body">Body</label> <br />
            <textarea
              onChange={this.onChange}
              value={this.state.body}
              name="body"
              id=""
              cols="20"
              rows="5"
            />
          </div>
          <button type="submit">submit</button>{" "}
        </form>
      </div>
    );
  }
}
