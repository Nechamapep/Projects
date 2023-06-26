import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    result: "",
    input: " "
  };
  handleInput = e => {
    const value = e.target.value;
    this.setState((prevState) => ({
      input: prevState.input + value
    }));
  };
  calculateResult = () => {
    const result = eval(this.state.input);
    this.setState({
      result: result,
      input: result
    });
  };
  clearInput = () => {
    this.setState({
      result: "",
      input: ""
    })
  }
  render() {

    return (

      <div>
        <h1>Calculator</h1>
        <input type="text" value={this.state.input} id='screen' />
        <br />
        <button value="1" onClick={this.handleInput}>1</button>
        <button value="2" onClick={this.handleInput}>2</button>
        <button value="3" onClick={this.handleInput}>3</button>
        <button value="+" onClick={this.handleInput}>+</button>
        <br />
        <button value="4" onClick={this.handleInput}>4</button>
        <button value="5" onClick={this.handleInput}>5</button>
        <button value="6" onClick={this.handleInput}>6</button>
        <button value="-" onClick={this.handleInput}>-</button>
        <br />
        <button value="7" onClick={this.handleInput}>7</button>
        <button value="8" onClick={this.handleInput}>8</button>
        <button value="9" onClick={this.handleInput}>9</button>
        <button value="*" onClick={this.handleInput}>*</button>
        <br />
        <button value="." onClick={this.handleInput}>.</button>
        <button value="0" onClick={this.handleInput}>0</button>
        <button value="=" onClick={this.calculateResult}>=</button>
        <button value="/" onClick={this.handleInput}>/</button>
        <br />
        <button onClick={this.clearInput} id='clear'>clear</button>
        <div>result: {this.state.result}</div>
      </div>
    )
  }
}


