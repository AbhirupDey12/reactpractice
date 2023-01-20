import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    console.warn('constructor called');
  }

  // componentDidMount() {
  //   console.warn("componentDidMount");
  // }

  // ComponentDidUpdate will never be invoked if shouldComponentUpdate() is false  
  componentDidUpdate(preProps, preState, snapShot) {
    console.warn("componentDidUpdate", snapShot); 
    if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
  }

  render() {
    // console.warn("render");
    return (
      <div>
        <h1>Component Did Update {this.state.count} </h1>
        <button onClick={() => this.setState({ count: 1 })} >Update Name</button>
      </div>
    )
  }

}

export default App;

