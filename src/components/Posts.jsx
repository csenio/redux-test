import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log("PROPS", this.props);
    // const { posts } = this.props;
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.title}</p>
      </div>
    ));
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    );
  }
}

Posts.proptypes = {
  fetchPosts: PropTypes.func.isRequired,
  Posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
