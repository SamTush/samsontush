import React from 'react';
import './MainSection.scss';

function MainSection() {
  return (
    <section className='main-section flex flex-col gap-6 py-5 h-full ps-8'>
        <div className='w-5/6'>
            <h3 className='font-bold text-xl'>Hi there,</h3>
            <h1 className='heading font-bold text-4xl mt-2 tracking-wide'>I'm Samson</h1>
        </div>

        <div className=' bg-myRed rounded-lg h-4/5 text-myWhite py-4 px-4 shadow-md shadow-myBlack'>
            <p className='font-bold tracking-wide'>
              A versatile and dedicated Full Stack Developer proficient in a wide spectrum of front-end and back-end technologies.
            </p>
        </div>

        <div className='grid grid-cols-2 gap-6 round h-4/5'>
            <div className=' grid grid-rows-2 gap-6 rounded-lg'>
                <div className='rounded-lg bg-myRed'>dfasd</div>
                <div className='rounded-lg bg-myRed'>fsdf</div>
            </div>
            <div className=' bg-myRed rounded-lg'>fsddf</div>
        </div>

    </section>
  )
}

export default MainSection