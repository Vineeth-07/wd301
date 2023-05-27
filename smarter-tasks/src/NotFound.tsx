import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <h2 className='text-3xl font-sans text-red-600 font-bold'>404 Page Not Found</h2>
      <div className='mt-4'>
      <Link to="/">
        <div className="mt-8">
           <button
             id="backToHomeButton"
             type="submit"
             className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green"
           >
             Home
           </button>
         </div>
      </Link>
      </div>
    </div>
  )
}