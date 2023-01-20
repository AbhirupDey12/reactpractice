import React, { Component } from 'react';
import User from './User';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  // componentDidMount() {
  //   console.warn("componentDidMount");
  // }

  // ComponentDidUpdate will never be invoked if shouldComponentUpdate() is false  
  // componentDidUpdate(preProps, preState, snapShot) {
  //   console.warn("componentDidUpdate", snapShot); 
  //   if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
  // }

  // shouldComponentUpdate
  // shouldComponentUpdate() {
  //   console.warn("shouldComponentUpdate", this.state.count);
  //   if (this.state.count > 5 && this.state.count < 10) return true;
  // }

  render() {
    return (
      <div>
        {this.state.show ? <User /> : <h1> Child Component Removed </h1>}
        <button onClick={() => this.setState({ show: !this.state.show })}  > Toggle Child Component </button>
      </div>
    )
  }

}

export default App;

