import React, { useState } from 'react'
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import MobileNavbar from './MobileNavbar';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>{isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}
            <div className=' bg-background sticky top-0 z-10'>
                <nav className=' max-w-screen-xl mx-auto py-4 px-6'>
                    <div className=' flex items-center justify-between '>
                        <img className='h-11 w-auto object-contain' alt='logo' src='https://www.freepnglogos.com/uploads/logo-chatgpt-png/black-chatgpt-logo-circle-symbol-black-png-0.png' />
                        <ul className=' hidden md:flex md:gap-14'>
                            <li>
                                <a className='menu-item'>Home</a>
                            </li>
                            <li>
                                <a className='menu-item'>Services</a>
                            </li>
                            <li>
                                <a className='menu-item'>Our Work</a>
                            </li>
                            <li>
                                <a className='menu-item'>Testimonials</a>
                            </li>
                        </ul>

                        <button className=' hidden h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block'>Contact Us</button>
                        <button onClick={() => { setIsMenuOpen(true) }} className=' w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50'>
                            {isMenuOpen ? <RiCloseFill /> : <RiMenu4Line />}
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar