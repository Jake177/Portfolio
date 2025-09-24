import React from 'react'

const NavigationCircles = () => {
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 200)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            className={
                `fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full flex items-center justify-center shadow-lg 
                 bg-blue-500 text-white hover:bg-blue-600 active:scale-95 
                 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-400 
                 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-blue-400 dark:focus:ring-yellow-500 
                 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`
            }
        >
            <i className="bx bx-chevron-up text-2xl" />
        </button>
    )
}

export default NavigationCircles
