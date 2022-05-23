import { WelcomeContainer, MainText, SecondaryText, LinksContainer } from './styles'
import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa'

export default function WelcomeMessage() {
  return (
    <WelcomeContainer>
      <MainText>
        <span>Looking for</span>
        <span>a web</span>
        <span>developer?</span>
      </MainText>
      <SecondaryText>
        <span>I'm Fabio Oliveira,</span>
        <span style={{color: 'orange'}}>Frontend</span>
        <span>and</span>
        <span style={{color: 'orange'}}>Backend</span>
        <span>developer</span>
      </SecondaryText>
      <LinksContainer>
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
        <button type='button'>
          <strong>Resume</strong>
          <div>
            <FaPaperclip style={{color: '#000'}}/>
          </div>
        </button>
      </LinksContainer>
    </WelcomeContainer>
  )
}