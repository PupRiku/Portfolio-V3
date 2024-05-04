import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark text-lg font-medium'>
      <Layout className='flex items-center justify-between py-8'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
          Built With <span className='px-1 text-2xl text-primary'>&#9825;</span>{' '}
          by&nbsp;
          <Link href='/' className='underline underline-offset-2'>
            Chris Diorio
          </Link>
        </div>
        <Link
          href='mailto:chris.diorio12@gmail.com'
          target={'_blank'}
          className='underline underline-offset-2'
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
