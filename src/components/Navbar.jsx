import React from 'react'

function Navbar() {
  return (
    <section className='lg:h-full 2xl:h-full xl:h-full md:h-fit h-fit flex flex-col'>
        <div className='h-1/6 flex justify-center items-center'>
          <img className='lg:h-3/6 xl:h-3/6 2xl:h-3/6 md:h-20 md:mt-8 h-20 mt-8 ' src="./assets/logo-black.png" alt="Samson Tush"  />
        </div>
        <div className='h-full md:mt-4 lg:mt-0 mt-4 flex justify-center py-4'>
            <ul className='flex flex-col gap-3 w-5/6'>
                <a href="https://github.com/SamTush">
                  <li className='bg-myBlue py-2 px-3 w-full text-myWhite rounded-lg'>
                      <i class="fa-brands fa-github me-2"></i>
                      Github
                  </li>
                </a>
                <a href="https://www.linkedin.com/in/samson-tush/">
                  <li className='bg-myBlue py-2 px-3 w-full text-myWhite rounded-lg'>
                      <i class="fa-brands fa-linkedin me-2"></i>
                      LinkedIn
                  </li>
                </a>
                <a href="https://www.pinterest.com/samsonTm/">
                  <li className='bg-myBlue py-2 px-3 w-full text-myWhite rounded-lg'>
                      <i class="fa-brands fa-square-pinterest me-2"></i>
                      Pinterest
                  </li>
                </a>
                <a href="https://docs.google.com/document/d/1Y6HJlIk-SUfHnnRnnJCeJ-Vt1D1N6DKKYapcF5GPBlA/edit?usp=sharing">
                  <li className='bg-myBlue py-2 px-3 w-full text-myWhite rounded-lg'>
                      <i class="fa-regular fa-file me-2"></i>
                      CV
                  </li>
                </a>
            </ul>
        </div>
        <div className='h-1/5 md:my-4 lg:my-0 my-4 flex justify-center items-center gap-3'>
            <div className=' h-10 w-10 overflow-hidden rounded-full'>
              <img src="./assets/photo.png" alt="" srcset="" />
            </div>
            <div className='w-fit'>
                <h3 className='font-bold text-sm w-fit'>Samson Tush</h3>
                <h4 className='text-xs w-fit'>Full-stack developer</h4>
            </div>
        </div>
    </section>
  )
}

export default Navbar