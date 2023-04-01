import React from 'react'

const Header = () => {
  return (
    <div className="h-[5.5rem] bg-sky-700">
    <div className="container mx-auto text-white flex justify-between items-center h-full">
      <nav>
        <ul className="flex">
          <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
            <a href="pokemon">Pokemon</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )
}

export default Header
