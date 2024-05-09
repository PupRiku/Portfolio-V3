import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

// const AnimatedNumbers = ({ value }) => {
//   const ref = useRef(null)

//   const motionValue = useMotionValue(0)
//   const springValue = useSpring(motionValue, { duration: 3000 })
//   const isInView = useInView(ref, { once: true })

//   useEffect(() => {
//     if (isInView) {
//       motionValue.set(value)
//     }
//   }, [isInView, value, motionValue])

//   useEffect(() => {
//     springValue.on('change', latest => {
//       if (ref.current && latest.toFixed(0) <= value) {
//         ref.current.textContent = latest.toFixed(0)
//       }
//     })
//   }, [springValue, value])

//   return <span ref={ref}></span>
// }

const about = () => {
  return (
    <>
      <Head>
        <title>Chris Diorio | About</title>
        <meta name='description' content='About Chris Diorio' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Ambition From Fantasy!' className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-4 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                About Me
              </h2>
              <p className='mb-4 font-medium'>
                <i>
                  “Ambition is not what one would do, but what one does, for
                  ambition without action is fantasy.”
                </i>
              </p>
              <p className='mb-4 font-medium'>
                When it comes to most ambitions, this quote falls true. However,
                what about those of us whose ambition is fantasy? For me, this
                is who I am. I am a designer who lives in fantasy. Whether it is
                the graphical designs I produce, the characters I portray on
                stage, or the stories I envision in games, fantasy is my
                reality.
              </p>
              <p className='mb-4 font-medium'>
                I am a user experience designer that enjoys thinking outside the
                box for unique and engaging solutions. My philosophy to user
                experience design includes the following points:
              </p>
              <p className='mb-4 font-medium'>
                <b>There's no such thing as a dumb question.</b> I enjoy hearing
                other people's stories and learning as much as I can. You can't
                really learn unless you ask and even the smallest question can
                give you more information than some of the more obvious ones.
                So, I don't hold back when asking for more detail.
              </p>
              <p className='mb-4 font-medium'>
                <b>Celebrate success; Embrace failure.</b> We should all be
                happy when a project is successful, but we shouldn't let failure
                deter us from our goal. In fact, I have found that some of my
                biggest failures helped make the product, and myself, even
                stronger. I'm not afraid to fail and I'm more excited about what
                I will learn.
              </p>
              <p className='mb-4 font-medium'>
                <b>You can't spell functional without “fun”.</b> I'm a very
                outgoing person who doesn't try to take life too seriously. I
                feel by injecting a little bit of that into my work makes the
                user experience even more enjoyable. So, why not have a little
                fun with your design; it doesn't have to be all business all the
                time.
              </p>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                My Life
              </h2>
              <p className='mb-4 font-medium'>
                Outside of work and design, my hobbies include theater and
                gaming. I've been involved in theater since high school and have
                loved it ever since. I've taken on many roles both on and off
                stage, but my most common role has been that of the Stage
                Manager. It's been a great escape and my experiences are what
                have led to my Madison Audition Hub project.
              </p>
              <p className='font-medium'>
                I'm also enjoy games, including video games, table-top and board
                games, and online social strategy games. I'm a huge fan of
                Dungeons and Dragons and enjoy the story crafting that comes
                with it. I enjoy the strategy and escape from reality they give,
                along with the connection between people they can give.
              </p>
            </div>
            <div className='relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark'>
              <div className='absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image
                src={profilePic}
                alt='Chris Diorio'
                className='h-auto w-full rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            {/* <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
                  years of software development
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
                  projects completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
                  years of experience
                </h2>
              </div>
            </div> */}
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
