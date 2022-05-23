import { WelcomeContainer, MainText, SecondaryText } from './styles'

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
    </WelcomeContainer>
  )
}