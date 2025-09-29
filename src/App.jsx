import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Loader from './components/Loader'
import { ThemeProvider } from './context/ThemeContext'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'

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
  <div className='min-h-screen pt-20 sm:pt-24 bg-gray-900 dark:bg-gray-900 dark:text-yellow-500 text-blue-500 transition-colors duration-300'>
        <Loader isLoading={isLoading}/>
        {!isLoading && (
        <>
  <Navbar />
  <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
