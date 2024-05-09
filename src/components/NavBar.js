import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark transition-[width] duration-300 group-hover:w-full ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      href={href}
      className={`${className} group relative my-2 text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-light transition-[width] duration-300 group-hover:w-full dark:bg-dark ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='relative z-10 flex w-full items-center justify-between px-32 py-8 font-medium lg:px-16 md:px-12 sm:px-8 dark:text-light'>
      <button
        className='hidden flex-col items-center justify-center lg:flex'
        onClick={handleClick}
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light  ${isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light  ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light  ${isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}`}
        ></span>
      </button>

      <div className='flex w-full items-center justify-between lg:hidden'>
        <nav>
          <CustomLink href='/' title='Home' className='mr-4' />
          <CustomLink href='/about' title='About' className='mx-4' />
          <CustomLink href='/projects' title='Projects' className='ml-4' />
          {/* <CustomLink href='/articles' title='Articles' className='ml-4' /> */}
        </nav>

        <nav className='flex flex-wrap items-center justify-center'>
          <motion.a
            href='https://twitter.com/pupriku'
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='mr-3 w-6'
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href='https://github.com/PupRiku'
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='mx-3 w-6'
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href='https://www.linkedin.com/in/cdiorio/'
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='mx-3 w-6'
          >
            <LinkedInIcon />
          </motion.a>
          {/* <motion.a
            href='https://dribbble.com'
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='ml-3 w-6'
          >
            <DribbbleIcon />
          </motion.a> */}
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className='fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-dark/90 py-32 backdrop-blur-md dark:bg-light/75'
        >
          <nav className='flex flex-col items-center justify-center'>
            <CustomMobileLink
              href='/'
              title='Home'
              className=''
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/about'
              title='About'
              className=''
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/projects'
              title='Projects'
              className=''
              toggle={handleClick}
            />
            {/* <CustomMobileLink href='/articles' title='Articles' className='' toggle={handleClick} /> */}
          </nav>

          <nav className='mt-2 flex flex-wrap items-center justify-center'>
            <motion.a
              href='https://twitter.com/pupriku'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='mr-3 w-6 sm:mx-1'
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href='https://github.com/PupRiku'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='mx-3 w-6 rounded-full bg-light sm:mx-1 dark:bg-dark'
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href='https://linkedin.com/in/cdiorio'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='mx-3 w-6 sm:mx-1'
            >
              <LinkedInIcon />
            </motion.a>
            {/* <motion.a
              href='https://dribbble.com'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='ml-3 w-6 sm:mx-1'
            >
              <DribbbleIcon />
            </motion.a> */}
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            >
              {mode === 'dark' ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
