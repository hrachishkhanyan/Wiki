import React from "react";

// Document component which is used in all pages

const Document = ({ title, content }) => {
  return (
    <div>
          <div className="ui header">
            {title}
          </div>
          <p>{content}</p>
    </div>
  );
};

export default Document;
