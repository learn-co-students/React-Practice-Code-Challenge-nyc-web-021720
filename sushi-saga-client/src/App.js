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
    money:100,
    addCash:''
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

  if (newDisplay>=this.state.sushis.length){

    newDisplay=0;
  }
      this.setState({
          displaySushis: newDisplay
      })
}

// instead of event , we want to click on sushis for the stuff we just ate(clicked)
showEaten = (id) => {
const sushiName=this.state.sushis.find(s =>s.id === id).name
const sushiPrice= this.state.sushis.find(s => s.id===id).price
const budget=this.state.money-sushiPrice
const newEat=[...this.state.eaten, id]


if (this.state.money >= sushiPrice && !this.state.eaten.includes(id) ){

  this.setState({
    eaten: newEat,
    money: budget
  })
  }
    
    else{
      // alert(`oops! ${sushiName} already taken, choose other sushi`)
      alert (this.state.money < sushiPrice ? "congrats you are broke! pls add more money to buy more sushi!": ` ${sushiName} already taken, choose others! `)
      
    }
  }

// eatSushi= (id) =>{
//   let sushiPrice=this.state.sushis.find(sushi => sushi.id === id).price

//   let newSushis=this.state.sushis.map(sushi => {
//     if (sushi.id === id){
//       return {...sushi, eaten:true}
//     }else{
//       return sushi;
//     }
//   })

//   let newMoney=this.state.money-sushiPrice
//   if(sushiPrice <= this.state.money){
//     this.setState({
//       sushis: newSushis,
//       money: newMoney
//     })
//   }else{
//     alert("Congrats you are officially broke!")
//   }
// }


handleChange=(e)=>{
  this.setState({addCash:e.target.value})
}

handleSubmit=(e)=> {
  e.preventDefault()

  this.setState({
    addCash: '',
    money: this.state.money + parseInt(this.state.addCash,10)
  })
}





  render() {
    // let displayS=this.state.sushis.slice(displaySushi ,displaySushi+4)
    // console.log(this.state.eaten)
    // console.log(this.state.eaten)
    // console.log(this.state.displaySushis)
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="money" value={this.state.addCash} onChange={this.handleChange} placeholder=" $$$how much yo?"/>
          <input type= "submit" />
        </form>

          <SushiContainer 
          // showSushi={displayS}
          showSushi={this.showSushi()}
          more={this.handleMore}
          eat={this.showEaten}
          eaten={this.state.eaten}
          />

          <Table 
          moneyLeft={this.state.money}
          removeEat={this.state.eaten}
          />
        
      </div>
    );
  }
}

export default App;