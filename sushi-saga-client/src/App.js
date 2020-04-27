import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis:[],
    cash: 200,
    cost: 0,
    timesClicked:[]

  }

  handStack = (id) =>{
    let temp = [...this.state.timesClicked,id]
    this.setState({
      timesClicked: temp
    })
  }


  componentDidMount(){
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
        <SushiContainer arraylist = {this.handStack} addCost = {this.addCost}sushis = {this.state.sushis} handleRender={this.handleRender}/>
        <Table timesClicked={this.state.timesClicked} cash = {this.state.cash} cost = {this.state.cost}/>
      </div>
    );
  }
}

export default App;