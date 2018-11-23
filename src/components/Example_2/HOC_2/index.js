import React from "react";
import ReactDOM from "react-dom";
import './index.css'

// 函数接受一个组件参数……
function HOC_2(WrappedComponent) {
  // ……返回另一个新组件……
  return class extends React.Component {

    render() {
      return (
        <div className="hocWrapper">
          <div className="title"> 列表新闻 </div>
          <WrappedComponent />
        </div>
      ); 
    }
  };
}

export default HOC_2;
