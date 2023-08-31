import React from 'react';
import './MainSection.scss';

function MainSection() {
  return (
    <section className='main-section flex flex-col gap-6 py-5 h-full lg:ps-8 md:px-4 px-4'>
        <div className='lg:w-5/6 md:mt-8 lg:mt-0'>
            <h3 className='font-bold text-xl'>Hi there,</h3>
            <h1 className='heading font-bold text-4xl mt-2 tracking-wide'>I'm Samson</h1>
        </div>

        <div className=' bg-myRed lg:h-4/5 md:h-fit rounded-lg text-myWhite py-4 px-4 shadow-md'>
            <p className='font-bold tracking-wide'>
              I'm a full stack web developer with a flair for collaborative pair programming and a proven track record in remote work. Proficient in Git, GitHub, GitFlow, test-driven programming, React, JavaScript, Ruby on Rails, and PostgreSQL, I bring holistic expertise to every project. My dedication to code quality, passion for crafting engaging user experiences, and adept mentoring of over 10 junior developers define my commitment to innovation and growth. Let's collaborate to transform your ideas into impactful digital realities.
            </p>
        </div>

        <div className='grid grid-cols-2 gap-6 round h-4/5 md:h-fit'>
            <div className=' grid grid-rows-2 gap-6 rounded-lg col-span-2 md:col-span-1'>
                <div className='flex rounded-lg shadow-md h-40 md:h-full p-3 gap-3'>
                    <div className='flex flex-col justify-center items-center bg-myBlack rounded-lg w-1/2 text-myWhite font-bold'>
                        <p className='mt-3 game-logo text-lg'>game<span className='text-2xl'>Z</span>one</p>
                    </div>
                    <div className='flex flex-col justify-center gap-2 ps-2 w-1/2'>
                        <a href="https://github.com/SamTush/gamezone">
                          <div className='flex gap-2 items-center'>
                                <i class="fa-brands fa-github fa-lg"></i>
                                <h4>github repo</h4>
                          </div>
                        </a>
                        <a href="https://game-zone.onrender.com">
                          <div className='flex gap-2 items-center'>
                              <i class="fa-solid fa-earth-europe fa-lg"></i>
                              <h4>live demo</h4>
                          </div>
                        </a>
                    </div>
                </div>
                <div className='flex gap-3 rounded-lg shadow-md p-3'>
                    <div className='flex flex-col justify-center items-center bg-myOrange rounded-lg w-1/2 text-myWhite font-bold'>
                        <div>
                          <i class="fa-solid fa-wallet fa-2xl"></i>
                        </div>
                        <p className='mt-3'>Budget app</p>
                    </div>
                    <div className='flex flex-col justify-center gap-2 ps-2 w-1/2'>
                        <a href="https://github.com/SamTush/budget">
                          <div className='flex gap-2 items-center'>
                              <i class="fa-brands fa-github fa-lg"></i>
                              <h4>github repo</h4>
                          </div>
                        </a>
                        <a href="https://budget-ower.onrender.com">
                          <div className='flex gap-2 items-center'>
                              <i class="fa-solid fa-earth-europe fa-lg"></i>
                              <h4>live demo</h4>
                          </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='rounded-lg shadow-md col-span-2 md:col-span-1' href="https://game-zone.onrender.com" >
                <div className='p-3 rounded-md overflow-hidden'>
                    <img src="./assets/screenshot.png" alt="" srcset="" />
                </div>
                <div className='px-4 pb-3'>
                  <a href="https://game-zone.onrender.com">
                    <div className='flex gap-2 items-center '>
                      <h3 className='font-bold' >gameZone</h3>
                      <h6 className='text-xs text-'>BUILT WITH React and SCSS</h6>
                    </div>
                    <p>
                      An immersive web app catering to gaming enthusiasts, showing a diverse range of games leveraging the powerful Freetogame API.
                    </p>
                  </a>
                </div>
            </div>
        </div>

    </section>
  )
}

export default MainSection