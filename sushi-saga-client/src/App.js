import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushis: [],
    eaten: [], //sushi id
    balance: 100,
    displaySushis: 0
  }
  componentDidMount(){
    fetch(API)
      .then(res => res.json())
      .then(data =>{this.setState({allSushis: data})})
  }

  displayFourSushis = ()=>{
    return this.state.allSushis.slice(this.state.displaySushis, this.state.displaySushis + 4)
  }

  displayMoreSushis = ()=>{
    let moreSushis = this.state.displaySushis + 4
    if (moreSushis >= this.state.allSushis.length){
      moreSushis = 0
    }
    this.setState({displaySushis: moreSushis})
  }

  eat = (sushi)=> {
    let newBalance = this.state.balance - sushi.price
    if(!this.state.eaten.includes(sushi) && newBalance >= 0){
      this.setState({
        eaten: [...this.state.eaten, sushi],
        balance: newBalance
      })
    }
    else if(!this.state.eaten.includes(sushi) && newBalance < 0){
      alert("You don't have enough money!")
    }
    else if(this.state.eaten.includes(sushi)){
      alert("You ate that sushi already!")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.displayFourSushis()}
          more={this.displayMoreSushis}
          eat={this.eat}
          eaten={this.state.eaten}
        />
        <Table remainBalance={this.state.balance} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;