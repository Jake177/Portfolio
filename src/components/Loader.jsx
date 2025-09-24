import React from 'react'

const Loader = ({ isLoading }) => {
  return (
    <div className={`fixed inset-0 bg-gray-200 dark:bg-gray-900 z-50 grid place-items-center 
    ${isLoading ? 'visible' : 'invisible' } transition-opacity duration-1000 ease-in-out`}>
        <img src='images/loading-gif-1.gif' alt='Loader' className='w-40'/>
    </div>
  )
}

export default Loader
