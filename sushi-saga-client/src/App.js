import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis:[],
    cash: 200,
    cost: 0
  }

  handleRender = () => {
    fetch(`http://localhost:3000/sushis`)
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        sushis: data
      })
    })
  }

  handleMore = () =>{
    let added = this.state.slideIndex + 4
    this.setState({
      slideIndex:added
    })
  }

  addCost = (price) =>{
    if(this.state.cash >= this.state.cost + price){
      let total = this.state.cost + price
      this.setState({
        cost:total
      })
    }


  }

  render() {
    return (
      <div className="app">
        <button onClick = {this.handleRender}> get Sushis</button>
        <SushiContainer addCost = {this.addCost}sushis = {this.state.sushis} handleRender={this.handleRender}/>
        <Table cash = {this.state.cash} cost = {this.state.cost}/>
      </div>
    );
  }
}

export default App;