import React from 'react'

const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-light p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 dark:bg-dark ${className}`}
    >
      {children}
    </div>
  )
}

export default Layout
