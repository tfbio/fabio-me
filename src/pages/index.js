import Head from 'next/head'
import Navbar from '../components/Navbar'
import WelcomeMessage from '../components/WelcomeMessage'
import ProjectCard from '../components/ProjectCard'
import { WelcomeSection, ProjectSection, AboutSection, Footer, Projects } from '@styles/homeStyles'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
      </Head>
      <main>
        <Navbar />
        <WelcomeSection>
          <WelcomeMessage />
        </WelcomeSection>
        <ProjectSection>
          <h1 style={{marginTop: -8}}>Projects</h1>
          <Projects>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Projects>
        </ProjectSection>
        <AboutSection>
          <h1>About Me</h1>
        </AboutSection>
      </main>
    </div>
  )
}
