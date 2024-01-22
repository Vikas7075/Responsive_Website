import React from 'react'

function MobileNavbar({ setIsMenuOpen }) {
    return (
        <div className='w-screen fixed top-0 z-20'>
            <div className='w-1/2 h-screen flex flex-col p-8 bg-background'>
                <img className='w-16 object-contain mb-8' alt='logo' src='https://www.freepnglogos.com/uploads/logo-chatgpt-png/black-chatgpt-logo-circle-symbol-black-png-0.png' />
                <ul>
                    <li className='mb-5'>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li className='mb-5'>
                        <a className='menu-item'>Services</a>
                    </li>
                    <li className='mb-5'>
                        <a className='menu-item'>Our Work</a>
                    </li>
                    <li className='mb-5'>
                        <a className='menu-item'>Testimonials</a>
                    </li>
                </ul>
                <button className='h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block'>Contact Us</button>

            </div>
            <div
                onClick={() => {
                    setIsMenuOpen(false)
                }}
                className='w-screen h-screen bg-overlayBg fixed top-0 -z-10' />
        </div>
    )
}

export default MobileNavbar