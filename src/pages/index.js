import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightbulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Diorio</title>
        <meta name='description' content='Portfolio for Chris Diorio' />
      </Head>
      <main className='flex min-h-screen w-full items-center text-dark dark:text-light'>
        <Layout className='pt-0'>
          <div className='flex w-full items-center justify-between'>
            <div className='w-1/2'>
              <Image
                src={profilePic}
                alt='Chris Diorio'
                className='h-auto w-full'
              />
            </div>
            <div className='flex w-1/2 flex-col items-center self-center'>
              <AnimatedText
                text='Turning Vision Into Reality With Code And Design.'
                className='!text-left !text-6xl'
              />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className='mt-2 flex items-center self-start'>
                <Link
                  href='/dummy.pdf'
                  target={'_blank'}
                  className='flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light'
                  download={true}
                >
                  Resume <LinkArrow className={'ml-1 w-6'} />
                </Link>
                <Link
                  href='mailto:chris.diorio12@gmail.com'
                  target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute bottom-8 right-8 inline-block w-24'>
          <Image src={lightbulb} alt='Chris Diorio' className='h-auto w-full' />
        </div>
      </main>
    </>
  )
}
