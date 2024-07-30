import React from 'react';
import logo from '../assets/images/Header/Logo.svg';

function Footer() {
    return (
        <footer className=' bg-primarybg '>

            <div className=' w-full flex justify-center py-10 '>
                <div className='w-[30%] text-center flex flex-col gap-2'>
                    <h3 className='font-bold text-2xl'>About us</h3>
                    <p className=' font-semibold text-redfont '>At Happy Pets, we provide all-inclusive services for your furry friends, from grooming and training to medical care and quality products. Our mission is to ensure your pets live healthy, happy, and well-cared-for lives.</p>
                    <img src={logo} alt="company logo" />
                </div>

                <div className='w-[40%] text-center'>
                    <h3 className='font-bold text-2xl'>Our services</h3>
                    <div className=' grid grid-cols-3 font-semibold gap-y-6 mt-6'>
                        <span>Pet Training</span>
                        <span>Pet Shelter</span>
                        <span>Pet Health</span>
                        <span>Pet Essentials</span>
                        <span>Pet Grooming</span>
                    </div>
                </div>
                <div className='w-[20%] flex items-center flex-col justify-center font-semibold gap-8'>
                    <button className=' border border-black rounded-2xl px-6 py-1'>Join Us</button>
                    <button className=' border border-black rounded-2xl px-3 py-1'>Contact Us</button>
                </div>
            </div>

        </footer>
    )
}

export default Footer