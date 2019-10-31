import * as React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./home";
import Coffee from "./coffee";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Link to="/">🏠</Link>
          <Link to="/coffee">☕️</Link>
          <Route exact path="/" component={Home} />
          <Route path="/coffee" component={Coffee} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
