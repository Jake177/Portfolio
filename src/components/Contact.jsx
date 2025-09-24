import React from 'react'
import NavigationActivationCircles from './NavigationCircles';

const Contact = () => {
  return (
    <div id="contact" className='h-screen flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-light md:mb-32 mb-24 special-font'>Contact</h2>
        <form className='flex flex-col lg:space-y-12 space-y-8'>
            <input type="email" placeholder='Email' className='normal-font md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-blue-500 dark:border-yellow-500
             placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-300'></input>
            <textarea placeholder='Message' className='normal-font md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-blue-500 dark:border-yellow-500
             placeholder-gray-600 dark:placeholder-yellow-500/50 min-h-[100px] max-h-[200px] resize-y p-3 transition-colors duration-300'></textarea>
             <input type="submit" value='Stay Connected' className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 bg-blue-500 dark:bg-yellow-500 text-gray-200 dark:text-gray-900 uppercase font-extrabold cursor-point tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-300'></input>
        </form>
        <NavigationActivationCircles section="contact"/>
    </div>
  )
}

export default Contact
