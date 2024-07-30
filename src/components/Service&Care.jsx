import React from 'react';
import doghaircut from '../assets/images/Service_Care/doghaircut.png';
import backgrundimg from '../assets/images/Service_Care/background.png';
import cutedogs from '../assets/images/Service_Care/cutedogshome.png';
import man_dog from '../assets/images/Service_Care/man_dog.png';
import cat_vat from '../assets/images/Service_Care/cat_vat.png';
import dog_vat from '../assets/images/Service_Care/dog_vat.png';
import img1 from '../assets/images/Service_Care/image1.png';
import img2 from '../assets/images/Service_Care/image2.png';
import img3 from '../assets/images/Service_Care/image3.png';

function ServiceCare() {
  return (
    <section className=' bg-secondarybg min-h-[50vh]'>
      <div className=' text-center '>
        <h2 className='text-center font-bold text-3xl font-cursive pt-3' >Services to help your pet feel more loved</h2>
        <div className='flex justify-between items-center px-8 mt-5 gap-10'>

          <div className='w-[60%] bg-cover  flex items-center bg-[#d5b1b1] rounded-3xl overflow-hidden' style={{ backgroundImage: `url(${backgrundimg})` }}>
            <div className='w-[50%]'  >
              <img className='w-full' src={doghaircut} alt="dog getting a hair cut" />
            </div>
            <div>
              <p className='font-semibold text-2xl'> Pamper your pet with our top-notch grooming services</p>
              <button className='red-button px-4 py-2 rounded-2xl font-bold mt-6'>
                Pet’s Shelter
              </button>
            </div>
          </div>

          <div className='w-[40%] flex flex-col gap-5'>

            <div className='p-3 bg-[#DDC0AA] rounded-3xl flex items-center bg-cover' style={{ backgroundImage: `url(${backgrundimg})` }}>
              <div className='text-center'>
                <p className='text-md font-semibold'>
                  A home away from home for your furry friends
                </p>
                <button className='red-button px-3 py-1 rounded-xl font-bold mt-2' >
                  Pet’s essential
                </button>
              </div>
              <div style={{ boxSizing: 'unset' }}>
                <img className='' src={cutedogs} alt="cat" />
              </div>
            </div>

            <div className='p-3 bg-primarybg rounded-3xl flex items-center bg-cover' style={{ backgroundImage: `url(${backgrundimg})` }}>
              <div className='text-center'>
                <p className='text-md font-semibold'>
                  Transform your pet with our expert training programs
                </p>
                <button className='red-button px-3 py-1 rounded-xl font-bold mt-2' >
                  Pet’s Training
                </button>
              </div>
              <div style={{ boxSizing: 'unset' }}>
                <img className='' src={man_dog} alt="cat" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='text-center'>
        <h2 className='text-center font-bold text-3xl font-cursive pt-3'>
          We Care About Your Pet’s Wellbeing
        </h2>


        <div className=' flex justify-around items-center gap-5 px-8 mt-5 py-5 '>

          <div className='bg-cover flex items-center bg-[#d5b1b1] rounded-3xl overflow-hidden' style={{ backgroundImage: `url(${backgrundimg})` }}>
            <div className='w-[60%]'>
              <img className='w-full object-contain py-4' src={cat_vat} alt="cat" />
            </div>
            <div className='w-[40%] px-4'>
              <div>
                <p className='font-semibold text-2xl'> Pamper your pet with our top-notch grooming services</p>
                <button className='red-button px-4 py-2 rounded-2xl font-bold mt-6'>
                  Pet’s Shelter
                </button>
              </div>
            </div>
          </div>


          <div className='bg-cover flex items-center bg-[#d5b1b1] rounded-3xl overflow-hidden' style={{ backgroundImage: `url(${backgrundimg})` }}>
            <div className='w-[60%]'>
              <img className='w-full object-contain py-4' src={dog_vat} alt="dog" />
            </div>
            <div className='w-[40%] px-4'>
              <div>
                <p className='font-semibold text-2xl'> Reliable medication to keep your pets healthy and happy</p>
                <button className='red-button px-4 py-2 rounded-2xl font-bold mt-6'>
                  Pet’s Health
                </button>
              </div>
            </div>
          </div>


        </div>

      </div>

      {/* join our team  */}
      <div className='mt-5'>
        <div className=' min-h-[55vh] bg-primarybg  flex ' >
          <div className='w-[50%]  relative' >
            <img className='w-[40%] absolute -bottom-4 ' src={img1} alt="pet playing" />
            <img  className='w-[40%] absolute left-24 -bottom-10 z-10' src={img2} alt="pet playing" />
            <img className='w-[40%] absolute left-64 -bottom-4 ' src={img3} alt="pet playing" />
          </div>


          <div className='w-[40%] flex items-center  flex-col justify-center px-10 text-center '>
            <p className='font-semibold text-2xl'>
              Join our team of expert pet trainers and doctors to help us care for our furry friends
            </p>
            <button className='red-button px-4 py-2 rounded-2xl font-bold mt-6'>
              Join Us
            </button>
          </div>
        </div>


        <div className=' min-h-[20vh]'>
          
        </div>

      </div>


    </section>
  )
}

export default ServiceCare;