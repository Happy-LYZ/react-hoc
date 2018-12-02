import React from "react";
import ReactDOM from "react-dom";

// 函数接受一个组件参数……
function HOC_1(WrappedComponent, key) {
  // ……返回另一个新组件……
  return class extends React.Component {
    constructor(props) {
      super(props);
      console.log("HOC constructor"); // eslint-disable-line
      this.state = {
        value: ''
      };
    }

    componentWillMount() {
      console.log("HOC componentWillMount"); // eslint-disable-line
    }

    onInputChange = e => {
      this.setState({
        value: e.target.value
      });
    };

    getValue = () => {
      return this.state.value;
    };

    render() {
      const props = {
        ...this.props,
        onInput: this.onInputChange,
        value: this.state.value,
        getValue: this.getValue,
      };
      console.log("this.props", props);
      return <WrappedComponent {...props} addProps={'I am Added Props by HOC'} />;
    }
  };
}

export default HOC_1;
