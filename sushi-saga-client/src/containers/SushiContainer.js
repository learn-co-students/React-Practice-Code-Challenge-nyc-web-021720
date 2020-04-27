import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{
  
  state = {
    slideIndex: 0
  }

  handleMore = () =>{
    let added = this.state.slideIndex + 4
    this.setState({
      slideIndex:added
    })
  }


  render(){


    return (
      <Fragment>
        <div className="belt">
          
          {this.props.sushis.slice(this.state.slideIndex,this.state.slideIndex + 4).map(data => (
             <Sushi key = {data.id} arraylist = {this.props.arraylist}addCost={this.props.addCost} name = {data.name} url = {data.img_url} price={data.price}/>
          ))}
          <MoreButton handleMore={this.handleMore}/>
        </div>
      </Fragment>
    )
  }
             


}

export default SushiContainer