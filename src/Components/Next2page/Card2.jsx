import React from 'react'
import Card from './Card'

const Card2 = (props) => {
  return (
    <div>
        <Card 
        title={props.title}
         description={props.description}
        />
    </div>
  )
}

export default Card2