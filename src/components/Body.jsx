import React from 'react'

import Card from './Card'

const Body = ({data}) => {    
  return (
    <div className='container mx-auto px-4'>
        <div className="grid grid-cols-3 gap-4">
            {data.map(item => (
                <Card src={item.images.large} alt={item.name} />
            ))}
        </div>
    </div>
  )
}

export default Body