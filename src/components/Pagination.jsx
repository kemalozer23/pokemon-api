import React from 'react'

const Pagination = ({nextPage, previousPage, page}) => {

    return (
    <div className='container flex justify-center pt-8 ml-28 space-x-5'>
        <button onClick={() => previousPage(page)} className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
            Previous
        </button>
        <button onClick={() => nextPage(page)} className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
            Next
        </button>
    </div>
    )
}

export default Pagination