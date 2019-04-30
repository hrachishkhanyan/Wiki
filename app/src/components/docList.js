import React from "react";
import Document from "./document.js";
import { Link } from "react-router-dom"

// Component for the list of Documents shown in the main page

const DocumentList = ({ docs }) => {
  const docList = docs.map(doc => {
    const id = docs.indexOf(doc);
    return (
      
        <div  role="listitem" className="item" id={id} key={id}>
          <div>
            <Link to={`/${doc.title}`}>
              <Document
                id={id}
                title={doc.title}
                content={doc.contents}
              />
            </Link>
          </div>
        </div>
      
    );
  });
  return (
    <div role="list" className="ui divided relaxed list">
      {docList}
    </div>
  );
};

export default DocumentList;
