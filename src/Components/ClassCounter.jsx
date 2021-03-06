import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props){
      super(props);
      this.state = {count: 0};
}
      handleIncreaseCount = (e) => {
        e.preventDefault()
        this.setState({count: this.state.count + 1})
      }

      handleDecreaseCount = (e) => {
          e.preventDefault()
          this.setState({count: this.state.count - 1})
      }

    render() {
        return (
            <div style = {{textAlign: "center"}}>
                <h1>Count: {this.state.count}</h1>
                <button onClick ={this.handleDecreaseCount}>Decrease</button>
                &nbsp;
                <button onClick = {this.handleIncreaseCount}>Increase</button>
            </div>
        );
    }
}

export default ClassCounter;
