import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis:[],
    eaten:[],
    money:100,
    displaySushis:0

  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis =>{
      this.setState({
        sushis: sushis
      })
    })
  }


  
showSushi=()=>{

  return this.state.sushis.slice(this.state.displaySushis,this.state.displaySushis+4)
}




  render() {
    return (
      <div className="app">
        <SushiContainer showSushi={this.showSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;