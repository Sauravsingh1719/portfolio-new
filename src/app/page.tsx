import ContactPage from '@/components/Contact'
import Hero from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Writings } from '@/components/Writing'
import { BackgroundLayout } from '@/components/ui/BackgroundLayout' 

export default function Page() {
  return (
      <BackgroundLayout>
        <Hero />
        <Skills />
        <Projects />
        <Writings />
        <ContactPage />
      </BackgroundLayout>
  )
}