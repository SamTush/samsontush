import React from 'react'

function Navbar() {
  return (
    <section className='h-full flex flex-col'>
        <div className='h-1/6 flex justify-center items-center'>
          <img className='h-3/6' src="./assets/logo-black.png" alt="Samson Tush"  />
        </div>
        <div className='h-full flex justify-center py-4'>
            <ul className='flex flex-col gap-3 w-5/6'>
                <li className='bg-myBlue py-2 px-3 w-full text-myWhite rounded-lg'>Github</li>
                <li className='bg-myBlue py-2 px-3 w-full text-myWhite rounded-lg'>LinkedIn</li>
                <li className='bg-myBlue py-2 px-3 w-full text-myWhite rounded-lg'>Pinterest</li>
                <li className='bg-myBlue py-2 px-3 w-full text-myWhite rounded-lg'>CV</li>
            </ul>
        </div>
        <div className='h-1/5 flex justify-center items-center gap-3'>
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