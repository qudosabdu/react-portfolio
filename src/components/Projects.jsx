import React from 'react'
import ProjectItem from './ProjectItem'
// import images from '../assets/banner.jpg'
import image1 from '../assets/FbClone.jpg'
import image2 from '../assets/netflixClone.png'
import image3 from '../assets/crypto.jpg'
import image4 from '../assets/twitterClone.png'

function Projects() {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:ml-20 py-16' >
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={image1} title='Facebook'/>
            <ProjectItem img={image2} title='Neflix'/>
            <ProjectItem img={image3} title='Crypto'/>
            <ProjectItem img={image4} title='Twitter'/>
        </div>
    </div>
  )
}

export default Projects
