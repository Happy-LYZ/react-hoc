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
          <p>年龄：{this.props.getValue()}</p>
          <input
            id="input-age"
            type="text"
            placeholder="输入年龄"
            {...this.props}
          />
          <p>追加的props: {this.props.addProps}</p>
      </div>
    );
  }
}

export default HOC_1(Age, "age");
