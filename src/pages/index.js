import Head from 'next/head'
import Navbar from '../components/Navbar'
import WelcomeMessage from '../components/WelcomeMessage'
import ProjectCard from '../components/ProjectCard'
import { WelcomeSection, ProjectSection, AboutSection, Footer, Projects, Scrolldown } from '@styles/homeStyles'
import { BsChevronCompactDown } from 'react-icons/bs'
import { useState } from 'react'

export default function Home() {
  /*
  const [modalOpen, setModalOpen] = useState(false)

  function toggleModal() { setModalOpen(!modalOpen) }
*/
  return (
    <div className="container">
      <Head>
        <title>Home | Fabio.me</title>
      </Head>
      <main>
        <Navbar />
        <WelcomeSection>
          <WelcomeMessage/>
          <Scrolldown>
            <BsChevronCompactDown />
          </Scrolldown>
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
          <h1 style={{marginTop: 28}}>About Me</h1>
        </AboutSection>
        <Footer>Here is a footer mate</Footer>
      </main>
    </div>
  )
}
