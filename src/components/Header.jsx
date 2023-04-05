import React from 'react'

const Header = () => {
  return (
    <div className="h-[6rem] bg-light-blue-900 flex justify-center items-center">
      <div className='flex justify-center items-center mr-7'>
        <span className='font-display text-yellow-600 uppercase'>React</span>
        <img className='h-20 px-5 mb-5' src='pokemon.png' alt='pokemon'></img>
        <span className='font-display text-yellow-600 uppercase'>API</span>
      </div>
    </div>
  )
}

export default Header
