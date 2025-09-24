import React from 'react'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Loader from './components/Loader'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  const [isLoading,setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    },2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider>
      <div className='min-h-screen  bg-gray-200 dark:bg-gray-900 dark:text-yellow-500 text-blue-500 transition-colors duration-300'>
        <Loader isLoading={isLoading}/>
        {!isLoading && (
        <>
        <Home />
        <Skills />
        <Contact />
        </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
