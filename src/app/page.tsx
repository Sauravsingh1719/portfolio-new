import ContactPage from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Writings } from '@/components/Writing'
import WelcomeWrapper from '@/components/WelcomeWrapper' // Add this import

export default function Page() {
  return (
    <WelcomeWrapper> {/* Wrap your content */}
      <div className='bg-black'>
        <Hero />
        <Skills />
        <Projects  />
        <Writings />
        <ContactPage />
      </div>
    </WelcomeWrapper>
  )
}