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

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='flex w-full items-center justify-between px-32 py-8 font-medium dark:text-light'>
      <button
        className='flex flex-col items-center justify-center'
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
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        {/* <CustomLink href='/articles' title='Articles' className='ml-4' /> */}
      </nav>

      <nav className='flex flex-wrap items-center justify-center'>
        <motion.a
          href='https://twitter.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='mr-3 w-6'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href='https://github.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='mx-3 w-6'
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href='https://linkedin.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='mx-3 w-6'
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href='https://pinterest.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='mx-3 w-6 rounded-full bg-light'
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href='https://dribbble.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='ml-3 w-6'
        >
          <DribbbleIcon />
        </motion.a>
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
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
