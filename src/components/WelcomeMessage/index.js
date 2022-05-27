import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa'
import styles from './Welcome.module.scss'
import Link from 'next/link'

export default function WelcomeMessage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainText}>
        <strong>Looking for</strong>
        <strong>a web</strong>
        <strong>developer?</strong>
      </div>
      <div className={styles.secondaryText}>
        <strong>I'm Fabio Oliveira,</strong>
        <strong style={{color: 'orange'}}>Frontend</strong>
        <strong>and</strong>
        <strong style={{color: 'orange'}}>Backend</strong>
        <strong>developer</strong>
      </div>
      <div className={styles.links}>
        <a href="http://www.linkedin.com/in/ftavares-oliveira">
          <strong>Connect in</strong>
          <div>
            <FaLinkedin style={{color: '#2759aa', background: '#fff'}} />
          </div>
        </a>
        <a href="https://github.com/tfbio">
          <strong>Repos in</strong>
          <div>
            <FaGithub style={{color: '#000', background: '#fff'}} />
          </div>
        </a>
        <Link href="https://github.com/tfbio/test1/blob/main/Sample_text.pdf">
          <a>
            <strong>Resume</strong>
            <div>
              <FaPaperclip style={{color: '#000'}}/>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}