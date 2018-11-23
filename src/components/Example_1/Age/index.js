import React from "react";
import ReactDOM from "react-dom";
import HOC_1 from "../HOC_1";

class Age extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log("Age componentWillMount"); // eslint-disable-line
  }
  componentDidMount() {
    console.log("Age componentDidMount", this.props);
  }

  render() {
    return (
      <div>
        <p>
            <p>年龄：{this.props.getValue("age")}</p>
          <input
            id="input-age"
            type="text"
            placeholder="输入年龄"
            onChange={this.props.onChange("age")}
            value={this.props.getValue("age")}
          />
        </p>
      </div>
    );
  }
}

export default HOC_1(Age, "age");
