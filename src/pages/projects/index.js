import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../../public/images/projects/crypto-screener-cover-image.jpg'
import project2 from '../../../public/images/projects/portfolio-cover-image.jpg'
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark'>
      <div className='absolute -right-3 top-0 -z-10 h-[103%] w-[100.82%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light' />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='h-auto w-full'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <div className='flex w-1/2 flex-col items-start justify-between pl-6'>
        <span className='text-xl font-medium text-primary dark:text-primaryDark'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='underline-offset-2 hover:underline'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon className={'dark:text-light'} />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title, img, link, github }) => {
  return (
    <div>
      <article className='relative flex w-full flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark'>
        <div className='absolute -right-3 top-0 -z-10 h-[103%] w-[100.82%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light' />
        <Link
          href={link}
          target='_blank'
          className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
          <FramerImage
            src={img}
            alt={title}
            className='h-auto w-full'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className='mt-4 flex w-full flex-col items-start justify-between'>
          <span className='text-xl font-medium text-primary dark:text-primaryDark'>
            {type}
          </span>
          <Link
            href={link}
            target='_blank'
            className='underline-offset-2 hover:underline'
          >
            <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>
              {title}
            </h2>
          </Link>
          <div className='mt-2 flex w-full items-center justify-between'>
            <Link
              href={link}
              target='_blank'
              className='text-lg font-semibold underline dark:text-light'
            >
              Visit
            </Link>
            <Link href={github} target='_blank' className='w-8'>
              <GithubIcon className={'dark:text-light'} />
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Chris Diorio | Projects</title>
        <meta name='description' content='Projects by Chris Diorio' />
      </Head>
      <main className='mb-16 flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16'
          />
          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.'
                link='/'
                type='Featured Project'
                github='/'
                img={project1}
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                link='/'
                type='Featured Project'
                github='/'
                img={project1}
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                link='/'
                type='Featured Project'
                github='/'
                img={project1}
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='React Portfolio Website'
                summary='A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive.'
                link='/'
                type='Featured Project'
                github='/'
                img={project2}
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                link='/'
                type='Featured Project'
                github='/'
                img={project1}
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                link='/'
                type='Featured Project'
                github='/'
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
