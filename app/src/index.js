import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import WikiApp from "./App";
import withRevision from "./containers/withRevision";
import OpenDocument from "./components/openDocument";
import Document from "./components/document";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={WikiApp} />
      <Route exact path="/:page" component={OpenDocument} />
      <Route path="/:page/:revision" component={withRevision(Document)} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
