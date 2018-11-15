import React from "react";
import ReactDOM from "react-dom";
import HOC from "./HOC";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log("Name componentWillMount"); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <p>
          <input
            id="input-name"
            type="text"
            placeholder="输入姓名"
            onChange={this.props.onChange("name")}
            value={this.props.getValue("name")}
          />
        </p>
        <p>姓名：{this.props.getValue("name")}</p>
      </div>
    );
  }
}

const Demo = HOC(Name, "name");
export default Demo;
