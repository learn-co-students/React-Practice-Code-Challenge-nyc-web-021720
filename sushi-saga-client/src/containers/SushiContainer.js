import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import PropTypes from 'prop-types'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

  const {showSushi,more,eat,eaten}=props

  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
        showSushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} eat={eat} eaten={eaten}/>)
       



        }
        <MoreButton more={more}/>
      </div>
    </Fragment>
  )
}

SushiContainer.propTypes={
  showSushi: PropTypes.array.isRequired,
  more: PropTypes.func.isRequired,
  eat: PropTypes.func.isRequired,
  eaten: PropTypes.array.isRequired
}
export default SushiContainer