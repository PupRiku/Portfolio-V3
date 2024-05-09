import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className='mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='text-2xl font-bold capitalize'>{type}</h3>
        <span className='font-medium capitalize text-dark/75 dark:text-light/75'>
          {time} | {place}
        </span>
        <p className='w-full font-medium'>{info}</p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className='my-64'>
      <h2 className='mb-32 w-full text-center text-8xl font-bold'>Education</h2>
      <div ref={ref} className='relative mx-auto w-[75%]'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light'
        />
        <ul className='ml-4 flex w-full flex-col items-start justify-between'>
          <Details
            type='Capstone Certificate In User Experience Design'
            time='2019-2020'
            place='University of Wisconsin - Madison'
            info='Completed coursework in user and market research, methodologies, low and high fidelity prototyping, 
            and evaluation, resulting in a full prototype capstone project developed throughout the program.'
          />
          <Details
            type='Master Of Science In Human-Computer Interaction'
            time='2009-2012'
            place='Rensselaer Polytechnic Institute (RPI)'
            info='Completed coursework in human-computer interaction with theory in allied areas such as technical 
            communication, human factors, information design, cognitive science, and computer science'
          />
          <Details
            type='Bachelor of Science In Games & Simulation Arts & Sciences'
            time='2007-2012'
            place='Rensselaer Polytechnic Institute (RPI)'
            info='Completed coursework in game design, mechanics, theory and development, showcasing a completed team-
            produced game during the final year. Concentration focus was on the visual and animated elements of games, 
            with advanced coursework in 3D animation, character modeling, lighting and rendering, and visual effects.'
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
