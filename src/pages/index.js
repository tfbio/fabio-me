import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import WelcomeMessage from '../components/WelcomeMessage'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import wordCloud from '../assets/word-cloud.png'
import styles from '../styles/Home.module.scss'
import { BsChevronCompactDown } from 'react-icons/bs'
import { firstParagraph, secondParagraph } from '../content/about'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Fabio.me</title>
      </Head>
      <main id="welcome">
        <Navbar />
        <section className={styles.welcome}>
          <WelcomeMessage/>
          <BsChevronCompactDown className={styles.scrolldown}/>
        </section>
        <section className={styles.projects}>
          <h1 style={{marginTop: -8}} id="projects">Projects</h1>
          <div className={styles.projectlist}>
            <ProjectCard icon='live'/>
            <ProjectCard icon='live'/>
            <ProjectCard icon='live'/>
            <ProjectCard/>
          </div>
        </section>
        <section className={styles.about}>
          <h1 style={{marginTop: 28}} id="about">About Me</h1>
          <div className={styles.aboutContent}>
            <div>
              <p>{firstParagraph}</p>
              <p>{secondParagraph}</p>
            </div>
            <Image 
              src={wordCloud}
              height={450}
              width={350}
            />
          </div>
        </section >
        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            <h1>Sections</h1>
            <a href='#welcome'><strong>Back to Top</strong></a>
            <a href='#projects'><strong>Projects</strong></a>
            <a href='#about'><strong>About</strong></a>
          </div>
          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}
