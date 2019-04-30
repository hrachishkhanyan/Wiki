import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

// Wrapper for the history containing revisions

const withHistory = Comp => {
  class HistoryWrapper extends Component {
    state = {
      revisions: []
    };

    apiUrl = `/page/${this.props.match.params.page}`;

    // Request revision data from the server

    componentDidMount() {      
      axios
        .get(this.apiUrl)
        .then(res => {
          this.setState({ revisions: res.data.revisions });
        })
        .catch(err => console.log(err));
    }

    render() {
      return <Comp {...this.props} revisions={this.state.revisions} />;
    }
  }

  return withRouter(HistoryWrapper);
};

export default withHistory;
