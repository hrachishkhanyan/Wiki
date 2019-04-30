import React, { Component } from "react";
import PropTypes from "prop-types";

import withPages from "./containers/withPages";
import DocumentList from "./components/docList.js";
import Title from "./components/Title.js";

// The component for the main page

class WikiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docOpen: false,
      tempContent: {},
    };
  }

  render() {
    return (
      <div className="ui text container">
        <Title />
        <DocumentList
          docs={this.props.pages}
        />
      </div>
    );
  }
}

WikiApp.propTypes = {
  pages: PropTypes.array.isRequired
};

export default withPages(WikiApp);
