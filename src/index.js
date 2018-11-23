import React from "react";
import ReactDOM from "react-dom";
import Age from "./components/Example_1/Age";
import Name from "./components/Example_1/Name";
import FirstList from "./components/Example_2/FirstList";
import SecondList from "./components/Example_2/SecondList";
import "./index.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log("Index constructor"); // eslint-disable-line
  }
  componentWillMount() {
    console.log("Index componentWillMount"); // eslint-disable-line
  }

  render() {
    return (
      <div className="page-wrapper">
        <div >
          <h3>高阶组件1： 处理输入并展示输入结果的共同逻辑</h3>
          <div className="hoc1">
            <Age />
            <div className="part"></div>
            <Name />
          </div>
        </div>
        <div className="middle"></div>
        <div>
          <h3>高阶组件2： 处理共同页面架构</h3>
          <div className="hoc2">
            <FirstList />
            <div className="part"></div>
            <SecondList />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
