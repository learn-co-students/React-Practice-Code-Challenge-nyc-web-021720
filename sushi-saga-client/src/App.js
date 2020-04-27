import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    budget: 55,
    startIndex : 0,
    eaten : []
}

  componentDidMount(){
    fetch(`${API}`)
    .then(response => response.json())
    .then(json => this.setState({ sushis: json }))
  }

  updateIndex = () => this.setState({startIndex : this.state.startIndex + 4})

  eatSushi = (id) => {
    let sushiPrice = this.state.sushis.find(sushi => sushi.id === id).price
    if(this.state.budget >= sushiPrice){
      this.setState({eaten : [...this.state.eaten, id],
      budget: this.state.budget - sushiPrice})
    } else{
      alert("you need more money!")
    }
    }


  render() {
   let displayedSushis = this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4)
    return (
      <div className="app">
        <SushiContainer sushis={displayedSushis} updateIndex = {this.updateIndex} eatSushi={this.eatSushi} eaten={this.state.eaten}/>
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;