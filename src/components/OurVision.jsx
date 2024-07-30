import React from 'react';
import bone from '../assets/images/hero/bones.svg';
import animalgroup from '../assets/images/OurVision/animal-group.png';

function OurVision() {
    return (
        <section style={{ backgroundImage: `url(${bone})` }}
            className=' w-full bg-contain bg-primarybg ' >
            <div className='flex pt-16 '>
                <div className='w-[50%]'>
                    <img src={animalgroup} alt="animal-group" />
                </div>
                <div className='w-[50%] text-center px-12'>
                    <h2 className=' font-cursive font-bold text-4xl'>Our Vision</h2>
                    <p className='mt-14 font-bold text-2xl text-redfont' >
                        To be the leading destination for pet owners, offering a wide range of pet products, expert guidance, and a supportive network that promotes the well-being and happiness of pets in every home.

                    </p>
                </div>
            </div>

        </section>
    )
}

export default OurVision;