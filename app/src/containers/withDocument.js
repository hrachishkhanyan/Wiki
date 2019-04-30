import React, { Component } from "react";
import axios from "axios";

// A wrapper for the openDocument component

const withDocument = Comp => {
  class wrappedDocument extends Component {
    state = {
      content: ""
    };

    apiUrl = `/page/${this.props.match.params.page}/latest`;

    // Handle new revisions

    handleSave = (event, changedData) => {
      event.preventDefault();
      
      // A post request to the server to store the data for new revision

      axios
        .post(`/page/${this.props.match.params.page}`, {'page': changedData})
        .then(res => {         
          this.setState({ content: changedData })
        })
        .catch(err => console.log(err));
    };

    // Request current document data from the server

    componentDidMount() {      
      axios
        .get(this.apiUrl)
        .then(res => {
          this.setState({ content: res.data.data });
        })
        .catch(err => console.log("No content in this document yet:", err));
    }
    render() {
      const {
        match: {
          params: { page: title }
        }
      } = this.props;
      return (
        <Comp {...this.props} handleSave={this.handleSave} title={title} content={this.state.content} />
      );
    }
  }
  return wrappedDocument;
};

export default withDocument;
