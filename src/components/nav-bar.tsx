import { Menu, X } from 'lucide-react';
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/play-trivia', label: 'Play Trivia' },
        { path: '/charts', label: 'Charts' }
    ]
    
    return (
        <nav>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <h1 className='font-bold text-base-content text-lg sm:text-xl hidden sm:block'>OpenTDB Data Visualization Tool</h1>
                    <h1 className='font-bold text-base-content text-lg sm:hidden'>OpenTDB</h1>
                    
                    <ul className='hidden md:flex gap-2'>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link 
                                    to={link.path} 
                                    className={
                                        `px-4 py-2 text-base-content font-medium rounded-lg hover:bg-neutral transition-all duration-200
                                        ${isActive(link.path) ? 'bg-neutral' : ''}
                                        `
                                    }
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button 
                        className='md:hidden p-2 rounded-lg text-base-content hover:bg-neutral transition-colors'
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label='Toggle menu'
                    >
                        {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
                    </button>
                </div>
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 pb-4' : 'max-h-0 pb-0'}`}>
                    <ul className='flex flex-col gap-2 pt-2'>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link 
                                    to={link.path} 
                                    onClick={() => setIsOpen(false)}
                                    className={
                                        `block px-4 py-3 rounded-lg font-medium transition-all duration-200
                                        ${isActive(link.path) ? 'bg-neutral' : ''}
                                        `
                                    }
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar