import React from "react";
import ReactDOM from "react-dom";
import HOC_1 from "../HOC_1";

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
        <p>姓名：{this.props.value}</p>
        <p>
          <input
            id="input-name"
            type="text"
            placeholder="输入姓名"
            {...this.props}
          />
        </p>
      </div>
    );
  }
}

export default HOC_1(Name, "name");