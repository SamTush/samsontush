import React from 'react'

function FooterSection() {
  return (
    <section className='h-full flex flex-col mt-10 lg:mt-0 md:ps-10 md:pe-4'>
        <div className='h-1/6 flex justify-center items-end font-bold'>
            <h4 className=' text-center '>Progress, tools & languages.</h4>
        </div>
        <div className='h-1/2 flex flex-col items-center mb-6 md:mb-0'>
          <hr className='mt-3 opacity-20 h-1 bg-myBlack w-1/4 ' />
          <div className='mt-8 rounded-md shadow-md shadow-myBlue bg-myBlack'>
            <img src="https://github-readme-streak-stats.herokuapp.com?user=samtush&hide_border=true&ring=fb8c00&sideNums=ffffff&stroke=ffffff&background=000000&sideLabels=ffffff&dates=ffffff&fire=fb8c00&currStreakLabel=fb8c00&currStreakNum=ffffff&date_format=M%20j%5B%2C%20Y%5D" alt="" srcset="" />
          </div>          
          {/* <div className='mt-4 rounded-md shadow-md shadow-myBlue bg-myBlack'>
            <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=samtush&show_icons=true&hide_border=true&title_color=ffffff&icon_color=fb8c00&text_color=939393&bg_color=000000" alt="" srcset="" />
          </div> */}
        </div>
        <div className='flex justify-center'>tech stack & tools</div>
        <div class="grid h-1/2 grid-rows-4 md:mt-8 lg:mt-0 grid-flow-col gap-4 p-5 shadow-md ">
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=html" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=js" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=ai" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=github" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=css" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=tailwind" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=ruby" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=githubactions" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=sass" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=figma" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=rails" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=vscode" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=bootstrap" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=ps" alt='' />
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=git" alt='' /> 
          </div>
          <div className='flex justify-center'>
            <img src="https://skillicons.dev/icons?i=postgres" alt='' /> 
          </div>
        </div>
        <div className='h-1/5 flex flex-col items-center mb-10 lg:mb-0 md:justify-center md:items-end'>
            <h3 className='font-bold text-sm w-fit mt-10 lg:mt-0'>Samson Mbaziira</h3>
            <h4 className='text-xs w-fit text-end'>Designed and developed with love. Copyright &copy; 2023 </h4>
        </div>
    </section>
  )
}

export default FooterSection