import React from 'react'

const myWorks = [
    {
        id: 1,
        title: " Facebook Clone",
        year: "2021",
        duration: " 1 year",
        img: " https://i.ibb.co/0s3pdnc/facebook-clone.png",
        link: "https://facebook-clone-1a0d0.web.app/"
    },
    {
        id: 2,
        title: " Amazon Clone",
        year: " 2022",
        duration: " 1 year",
        img: " https://i.ibb.co/0s3pdnc/facebook-clone.png",
        link: "https://facebook-clone-1a0d0.web.app/"
    },
    {
        id: 3,
        title: " Netflix Clone",
        year: " 2023",
        duration: " 1 year",
        img: " https://i.ibb.co/0s3pdnc/facebook-clone.png",
        link: "https://facebook-clone-1a0d0.web.app/"
    },
]




function Works() {
  return (
    <div id='work' className='max-w-[1040px] mx-auto md:pl-20 p-4 py-10'>
       <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
            Works
       </h1>

       {
              myWorks.map((work) => (  
                <ul key={work.id} className='flex flex-col md:flex-row relative border-l border-stone-200 '>
                    <li className='mb-10 ml-4'>
                        <div className='absolute w-3 h-3 bg-stone-200 rounded-full  mt-1.5 -left-1.5 border-white'/>
                        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                            <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
                                {work.year}
                            </span>
                            <span className='text-lg font-semibold text-[#001b5e]'>
                                {work.title}
                            </span>
                            <span className='my-1 text-sm font-normal leading-none text-stone-400 '>
                                {work.duration}
                            </span>

                        </p>
                        <p className='my-2 text-base font-normal text-stone-500'>
                            <span>
                                {work.img}
                            </span>
                        </p>
                        <p>
                            <span>
                                {work.link}
                            </span>
                        </p>
                    </li>
                </ul>
              ))
       }
    </div>
  )
}

export default Works
