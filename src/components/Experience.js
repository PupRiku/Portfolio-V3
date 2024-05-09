import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className='text-2xl font-bold capitalize'>
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            className='capitalize text-primary dark:text-primaryDark'
          >
            @{company}
          </a>
        </h3>
        <span className='font-medium capitalize text-dark/75 dark:text-light/75'>
          {time} | {address}
        </span>
        <p className='w-full font-medium'>{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className='my-64'>
      <h2 className='mb-32 w-full text-center text-8xl font-bold'>
        Experience
      </h2>
      <div ref={ref} className='relative mx-auto w-[75%]'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light'
        />
        <ul className='ml-4 flex w-full flex-col items-start justify-between'>
          <Details
            position='Coordinator of Digital Services'
            company='University of Wisconsin - Madison'
            companyLink='https://newstudent.wisc.edu'
            time='2018-Present'
            address='Madison, WI'
            work="Orchestrated technology and applications as administrator and functional 
            lead of four enterprise-level systems for UW-Madison's Student Orientation, 
            Advising, and Registration (SOAR) program. Drive innovation through researching, 
            recommending, and implementing technology and application resources including 
            Guidebook and Salesforce. Facilitate L1 and L2 tech support, acting as 
            the key liaison between IT services and the Office of Student Transition and Family 
            Engagement (OSTFE). Guide and mentor an undergraduate intern assisting the 
            technology functions of the SOAR program and related applications. Ensure 
            streamlined operations across all SOAR session programs, supporting staff as well 
            as answering student and parent questions."
          />
          <Details
            position='Senior Quality Assurance Tester'
            company='Raven Software'
            companyLink='https://www.ravensoftware.com/'
            time='2014-2018'
            address='Middleton, WI'
            work='Managed team of testers through development milestones and releases of software 
            for various video games. Developed test cases, content sweeps, and milestone test 
            plans, collaborating with production teams on deadline and project requirements. Tested 
            pre-release video games to verify functionality, data content, performance, 
            usability/playability, as well as hardware/software compatibility. Produced detailed 
            documentation on defects utilizing DevTrack and Jira, distributing findings and actions 
            to design teams.'
          />
          <Details
            position='Senior Quality Assurance Tester'
            company='Vicarious Visions (now Blizzard Albany)'
            companyLink='https://www.vvisions.com/'
            time='2012-2013'
            address='Albany, NY'
            work='Led testing on new video games prior to launch, ensuring all specifications and 
            requirements were satisfied. Actively engaged in daily Missions (Levels) Design scrum as 
            well as large production meetings, distributing important information to the team. Managed 
            evaluation of game reporting metrics functionality as well as playtesting feedback videos 
            and reports for further fixes and improvements. Identified issues and ran debugging 
            programs to ensure resolution. Recorded all defects, creating and distributing reports 
            outlining defects and processes followed to fix defects. Leveraged knowledge and expertise 
            to assist software developers in early development stages, highlighting potential issues, 
            assessing risks, and resolving issues before launch.'
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
