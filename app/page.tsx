import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { FeaturedProject } from '@/components/featured-project'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Services />
        <Process />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
