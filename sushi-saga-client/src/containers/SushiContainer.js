import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import PropTypes from 'prop-types'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const {showSushi}=props
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
        showSushi.map(sushi => <Sushi key={sushi.id} sushi={sushi}/>)


        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

SushiContainer.propTypes={
  showSushi: PropTypes.func.isRequired
}
export default SushiContainer