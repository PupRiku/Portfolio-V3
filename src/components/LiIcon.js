import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  })

  return (
    <figure className='absolute left-0 stroke-dark'>
      <svg className='-rotate-90' width='75' height='75' viewBox='0 0 100 100'>
        <circle
          cx='75'
          cy='50'
          r='20'
          className='fill-none stroke-primary stroke-1'
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx='75'
          cy='50'
          r='20'
          className='fill-light stroke-[5px]'
        />
        <circle
          cx='75'
          cy='50'
          r='10'
          className='animate-pulse fill-primary stroke-1'
        />
      </svg>
    </figure>
  )
}

export default LiIcon
