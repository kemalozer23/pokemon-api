import React from 'react'

import { Button } from "@material-tailwind/react";

const Pagination = ({nextPage, previousPage, page}) => {

    return (
    <div className='flex justify-center items-center py-8 space-x-5 bg-gray-100'>
        <div>
            <Button onClick={() => previousPage(page)} className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                Previous
            </Button>
        </div>
        <div>
            <Button onClick={() => nextPage(page)} className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                Next
            </Button>
        </div>
    </div>
    )
}

export default Pagination