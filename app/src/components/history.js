import React, { Component } from "react";
import { Link } from "react-router-dom";
import WithHistory from "../containers/withHistory";

// Component where all the revisions are listed. This is used in openDocument component

class HistoryWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeState: false
    };
  }

  stateChangeHandle = () => {
    this.setState({ activeState: !this.state.activeState });
  };

  render() {
    const className = `${this.state.activeState ? 'active' : ''}`;
    const {
      revisions,
      match: {
        params: { page: title }
      }
    } = this.props;
    if (!revisions) {
      return null;
    }
    const history = revisions.map(timestamp => {
      return (
        <li key={`item-${timestamp}`} className={`${className} content`}>
          <Link to={`/${title}/${timestamp}`}>{timestamp}</Link>
        </li>
      );
    });
    return (
      <div className="accordion ui">
        <div className={`title ${className}`} onClick={this.stateChangeHandle}>
          <i aria-hidden="true" className="dropdown icon" />
          History
        </div>
        { this.state.activeState ?
          <ul>{history}</ul>
          :
          <div></div>
        }
      </div>
    );
  }
}

export default WithHistory(HistoryWindow);
