import React from 'react'
import Card from './Card'

const Card3 = (props) => {
  return (
    <div>
        <Card 
         title={props.title}
         description={props.description}
        />
    </div>
  )
}

export default Card3