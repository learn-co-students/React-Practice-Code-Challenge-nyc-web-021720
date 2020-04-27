import React from 'react'

const Sushi = (props) => {
  // console.log(props.eaten)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eat(props.sushi.id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          // console.log(props.eaten)
          
          props.eaten.includes(props.sushi.id) ? null : <img src={props.sushi.img_url} width="100%" alt={props.sushi.name} />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi