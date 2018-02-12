import React, { Component } from 'react';

class App extends Component {
  constructor(number){
    super();
    this.state = {
      number:0,
    }
    this.click=this.click.bind(this);
    this.click1=this.click1.bind(this);
  }
  click(){
    this.setState({number:this.state.number+1})};
  click1(){
    this.setState({number:this.state.number-1})};

  render() {
    return (
      <div className="App">
        <input type = 'submit' value='+' onClick={this.click}/>
        {this.state.number}
        <input type = 'submit' value='-' onClick={this.click1}/>
      </div>
    );
  }
}

export default App;
