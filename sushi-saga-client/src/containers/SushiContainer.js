import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
        props.sushis.map(sushi =>{
          return <Sushi 
            key={sushi.id} 
            sushi={sushi} 
            eat={props.eat}
            eaten={props.eaten.includes(sushi)}
          />
        })
          
        }
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer