import React from 'react';
import logo from '../assets/images/Header/Logo.svg'
function Header() {
    return (
        <header className=' bg-primarybg h-[100px] flex '>
            <ul className='flex justify-between items-center w-full gap-14 text-redfont font-semibold text-[18px]  leading-[22px]'>
                <li className=' mr-auto cursor-pointer'><img src={logo} alt="logo" /></li>
                <li>Pet’s Services</li>
                <li>Pet’s Essentials</li>
                <li>Pet’s Health</li>
                <li>About Us</li>
                <li className=' mr-5'>Join Us</li>
            </ul>
        </header>
    )
}

export default Header;