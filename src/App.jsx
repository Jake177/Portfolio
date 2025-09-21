import React from 'react'
import Hero from './components/Hero'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className='min-h-screen  bg-gray-200 dark:bg-gray-900 dark:text-yellow-500 text-blue-500 transition-colors duration-300'>
        <Hero />
      </div>
    </ThemeProvider>
  )
}

export default App
