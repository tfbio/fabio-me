import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import WelcomeMessage from '../components/WelcomeMessage'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import wordCloud from '../assets/word-cloud.png'
import { 
  WelcomeSection,
  ProjectSection,
  AboutSection, 
  Footer, 
  Projects, 
  Scrolldown,
  AboutContent,
  FooterLinks
} from '@styles/homeStyles'
import { BsChevronCompactDown } from 'react-icons/bs'
import { firstParagraph, secondParagraph } from '../content/about'

export default function Home() {
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
          <AboutContent>
            <div>
              <p>{firstParagraph}</p>
              <p>{secondParagraph}</p>
            </div>
            <Image 
              src={wordCloud}
              height={450}
              width={350}
            />
          </AboutContent>
        </AboutSection>
        <Footer>
          <FooterLinks>
            <h1>Sections</h1>
            <p>Back to Top</p>
            <p>Projects</p>
            <p>About</p>
          </FooterLinks>
          <ContactForm />
        </Footer>
      </main>
    </div>
  )
}
