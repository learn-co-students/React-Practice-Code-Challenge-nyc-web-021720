import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(event)=>{props.more(event)}}>
            More sushi!
          </button>
}

export default MoreButton