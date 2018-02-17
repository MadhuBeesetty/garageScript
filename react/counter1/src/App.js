import React, { Component } from 'react';

class App extends Component {
  constructor(number){
    super();
    this.state = {
      number:0,
      counters:[],
    }
    this.click=this.click.bind(this);
    this.click1=this.click1.bind(this);
  }
  click(){
    this.setState({number:this.state.number+1})};
  click1(){
    this.setState({number:this.state.number-1})};

  render() {
      var numCounter=1;
    return (
      <div>
      <input type='submit' value='counter' onClick=numCounter+1; />
      <Counter number={this.state.number} click={this.click} click1={this.click1}/>
  </div>
      );
  }
}

const Counter = ({number,click,click1}) => {
  console.log(click)
  return (
    <div className="App">
      <input type = 'submit' value='+' onClick={click}/>
      {number}
      <input type = 'submit' value='-' onClick={click1}/>
    </div>
  );
};

export default App;
