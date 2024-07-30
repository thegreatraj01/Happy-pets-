import React from 'react';
import bonesvg from '../assets/images/hero/bones.svg';
import girlwithdog from '../assets/images/hero/girlwithdog.png';
import dog from '../assets/images/hero/dog.png';
import cat from '../assets/images/hero/cat.png';
import cat2 from '../assets/images/hero/cat2.png';
import cat3 from '../assets/images/hero/cat3.png';

function Hero() {
    return (
        <section className='min-h-screen w-full relative'>
            <div className={`relative bg-primarybg min-h-[50vh] w-full flex justify-between bg-contain `} style={{ backgroundImage: `url(${bonesvg})` }}>
                <div className=' w-[60%]'>
                    <img width={320} className=' object-cover h-auto absolute top-12' src={dog} alt="dog" />

                    <div className='absolute  inset-0 flex items-center justify-center  text-[40px] text-center flex-col'>
                        <span className=' font-cursive'>Give Your Pets</span>
                        <p className=' font-sans tracking-[0.10em] text-[48px] leading-tight'>
                            An Everyday <br />
                            Wagging Tail <br />
                            Experience
                        </p>
                    </div>

                </div>
                <div className=' bg-[#D0A8A8] w-[40%] flex justify-center rounded-lg'>
                    <img width={300} height={450} className=' bg-cover ml-14' src={girlwithdog} alt="girl holding a dog" />
                </div>
            </div>

            {/* bottom div  */}
            <div className=' bg-secondarybg min-h-[50vh] w-full flex justify-between p-10'>
                <div className='flex items-center'>
                    <p className=' font-semibold text-[38px] font-cursive'>This Is What We Do</p>
                </div>

                <div>
                    <div className='h-[330px] w-[330px] bg-primarybg rounded-3xl p-4 text-center ' >
                        <img className='w-[80%] m-auto' src={cat} alt="cat" />
                        <p className=' text-sm text-center font-medium mt-3'>All pet services in one place, including grooming, shelter, and more</p>
                        <button className='red-button px-2 py-1 rounded-xl mt-3 font-bold'>Pet’s Services</button>
                    </div>
                </div>
                <div className='w-[40%] flex flex-col justify-between'>
                    <div className='p-3 bg-[#D0A8A8] rounded-3xl flex items-center gap-7'>
                        <div style={{ boxSizing: 'unset' }}>
                            <img className='' src={cat2} alt="cat" />
                        </div>
                        <div className='text-center'>
                            <p className='text-sm'>
                                No need to worry about your pet’s health; we provide comprehensive care with veterinary and medication services.
                            </p>
                            <button className='red-button px-3 py-1 rounded-xl font-bold mt-1' >Pet’s Services</button>
                        </div>
                    </div>
                    <div className='p-3 bg-[#DDC0AA] rounded-3xl flex items-center gap-7'>
                        <div style={{ boxSizing: 'unset' }}>
                            <img className='' src={cat3} alt="cat" />
                        </div>
                        <div className='text-center'>
                            <p className='text-sm'>
                                All the essential pet foods in one place - no need to search elsewhere for quality products.
                            </p>
                            <button className='red-button px-3 py-1 rounded-xl font-bold mt-1' >
                                Pet’s essential
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero