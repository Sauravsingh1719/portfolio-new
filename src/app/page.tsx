import ContactPage from '@/components/Contact'
import Hero from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Writings } from '@/components/Writing'
import WelcomeWrapper from '@/components/WelcomeWrapper'
import { BackgroundLayout } from '@/components/ui/BackgroundLayout' 

export default function Page() {
  return (
    <WelcomeWrapper>
      <BackgroundLayout>
        <Hero />
        <Skills />
        <Projects />
        <Writings />
        <ContactPage />
      </BackgroundLayout>
    </WelcomeWrapper>
  )
}