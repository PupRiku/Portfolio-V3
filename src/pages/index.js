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
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex w-full items-center justify-between lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image
                src={profilePic}
                alt='Chris Diorio'
                className='h-auto w-full lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text='User Experience Fantasizer'
                className='!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled UX Designer, I am dedicated to turning ideas into
                innovative web applications. Explore my latest projects,
                showcasing my expertise in user experience design and web
                development.
              </p>
              <div className='mt-2 flex items-center self-start lg:self-center'>
                <Link
                  href='/dummy.pdf'
                  target={'_blank'}
                  className='flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light hover:border-dark hover:bg-light hover:text-dark md:p-2 md:px-4 md:text-base dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light'
                  download={true}
                >
                  Resume <LinkArrow className={'ml-1 w-6'} />
                </Link>
                <Link
                  href='mailto:chris.diorio12@gmail.com'
                  target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline md:text-base dark:text-light'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute bottom-8 right-8 inline-block w-24 md:hidden'>
          <Image src={lightbulb} alt='Chris Diorio' className='h-auto w-full' />
        </div>
      </main>
    </>
  )
}
