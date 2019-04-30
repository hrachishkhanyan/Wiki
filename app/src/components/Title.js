import React from "react";
import { Link } from "react-router-dom";

// App title component

const Title = () => {
  return (
    <div>
      <Link to="/">
        <h1 style={{color: "black"}}>Wiki</h1>
      </Link>
    </div>
  );
};

export default Title;
