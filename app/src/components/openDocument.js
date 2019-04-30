import React, { Component } from "react";
import Document from "./document";
import HistoryWindow from "./history";
import withDocument from "../containers/withDocument";
import Title from "./Title"

// Component, where the current document is shown along with its revisions

class OpenDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      editMode: false,
      revisionOpened: false,
    };
  }

  handleEdit = () => {
    this.setState({editMode: true });
  };

  handleContentChange = event => {
    const newContent = event.target.value;
    this.setState({ content: newContent });
  };

  handleOpenRevision = () => {
    this.setState({ revisionOpened: true});
  };

  render() {
    const content = this.state.editMode ? "" : this.props.content;

    return (
      <div className="ui text container" >
        <Title />
        <Document
              title={this.props.title}
              content={content}
              id={this.props.id}
            />
        {
          this.state.editMode ? // Switch between edit mode and current content
          <form onSubmit={(event) => {
            this.props.handleSave(event, this.state.content)
            this.setState({editMode: false})  
          }}>
            <input className="ui input" onChange={this.handleContentChange} defaultValue={content} rows='10'></input>
            <button style={{border: "none", cursor: "pointer"}} type="submit">
              <i className="save icon"></i>
            </button>
            <button style={{border: "none", cursor: "pointer"}} onClick={() => {this.setState({editMode: false})}}>
              <i className="cancel icon"></i>
            </button>
          </form>
          :
          <div>
              <i
                className="edit icon"
                style={{ cursor: "pointer" }}
                onClick={this.handleEdit}
              />
              <HistoryWindow handleOpenRevision={this.handleOpenRevision} />
          </div>
          
        }
      </div>
    );
  }
}

export default withDocument(OpenDocument);
