import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis:[],
    eaten:[],
    displaySushis:0,
    money:100
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


  
showSushi = () => {
  return this.state.sushis.slice(this.state.displaySushis,this.state.displaySushis+4)
}

handleMore = e =>{

  let newDisplay=this.state.displaySushis + 4
  
  this.setState({
      displaySushis:newDisplay
  })
}

// instead of event , we want to click on sushis for the stuff we just ate(clicked)
showEaten = (sushis) => {
let newMoney=this.state.money - sushis.price

this.setState({
  eaten: [...this.state.eaten,sushis],
  money: newMoney
})
}



  render() {
    return (
      <div className="app">
        <SushiContainer 
        showSushi={this.showSushi()}
        more={this.handleMore}``
        eat={this.showEaten}
        />
        <Table />
      </div>
    );
  }
}

export default App;