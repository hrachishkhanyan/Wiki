import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Title from "../components/Title"

// Wrapper for the document component, which helps to show the clicked revision

const withRevision = Comp => {
  class Revision extends Component {
    state = {
      content: "",
      title: ""
    };

    apiUrl = `/page/${this.props.match.params.page}/${
      this.props.match.params.revision
    }`;

    // Request the selected revision data from the server

    componentDidMount() {
      axios
        .get(this.apiUrl)
        .then(({ data: { title, data } }) => {
          this.setState({ title, content: data });
        })
        .catch(err => console.log(err));
    }

    render() {
      return <div className="ui text container">
                <Title />
                <Comp {...this.props} {...this.state} />
             </div>;
    }
  }

  return withRouter(Revision);
};

export default withRevision;
