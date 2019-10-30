import * as React from "react";
import "./App.css";

import Coffee from "./coffee";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>page under construction</p>
          {/* <p>made with 🖤 by andrew thompson</p> */}

          <Coffee />
        </header>
      </div>
    );
  }
}

export default App;
