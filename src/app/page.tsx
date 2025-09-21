import ContactPage from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Writings } from '@/components/Writing'


import React from 'react'

function page() {
  return (
    <div className='bg-black'>
        <Hero />
        <Skills />
        <Projects  />
        <Writings />
        <ContactPage />
    </div>
  )
}

export default page