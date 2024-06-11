import { useState } from 'react'

import logo from '../assets/logos/logo_small.jpg'

const links = [
    { name: 'Home', to: '#home' },
    { name: 'Services', to: '#services' },
    { name: 'Reviews', to: '#reviews' },
    { name: 'Contact', to: '#contact' },
]

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <nav className="flex items-center justify-between py-1 pl-3 pr-3">
                <a href="#home"><img src={logo} alt="Golden Moments Logo" className='h-16 w-20' /></a>
                {/* Hamburger menu icon for medium screens and below */}
                <div className="lg:hidden py-3">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <svg
                                className="w-6 h-6 transition-transform duration-500 transform rotate-90"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6 transition-transform duration-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation links for large screens and above */}
                <div className="hidden lg:flex lg:items-center font-semibold my-4 text-sm sm:text-md lg:text-lg">
                    {links.map((link, i) => (
                        <a key={i} href={link.to} className="ml-4">
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Navigation links dropdown menu for medium screens and below */}
            <nav className={`${isOpen ? 'flex flex-col' : 'hidden'} dropdown lg:hidden p-3`}>
                {links.map((link, i) => (
                    <a key={i} href={link.to} className="py-1" onClick={toggleMenu}>
                        {link.name}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Header
