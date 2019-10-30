import * as React from "react";
import { observable } from "mobx";
import "./style.css";

interface IProps {}

class Coffee extends React.Component<IProps> {
  @observable coffeeWeight = 0;
  @observable waterWeight = 0;

  render() {
    return (
      <div className="container">
        this is just a test
        <div className="grid">
          <div className="currentWeight">0g</div>
          <div className="b">b</div>
          <div className="c">c</div>
          <div className="d">d</div>
        </div>
      </div>
    );
  }
}

export default Coffee;
