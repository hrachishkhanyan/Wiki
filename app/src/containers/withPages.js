import React, { Component } from "react";
import axios from "axios";

// A wrapper for the main page component

const withPages = Comp => {
  class wrappedComponent extends Component {
    state = { pages: [] };

    apiUrl = "/pages";

    componentDidMount() {
      axios
        .get(this.apiUrl)
        .then(res => {
          const pages = res.data.titles.map(title => ({
            title,
            contents: ""
          }));
          this.setState({ pages });
        })
        .catch(err => console.log({ err }));
    }

    render() {
      const { pages } = this.state;
      return <Comp {...this.props} pages={pages} />;
    }
  }
  return wrappedComponent;
};

export default withPages;
