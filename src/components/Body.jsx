import React from 'react'

import Card from './Card'

const Body = ({data}) => {    
  return (
    <div className='px-4 flex justify-center items-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-9 xl:gap-9">
            {data.map(item => (
                <Card key={item.id} src={item.images.small} alt={item.name} />
            ))}
        </div>
    </div>
  )
}

export default Body