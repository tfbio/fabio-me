import { WelcomeContainer, MainText, SecondaryText } from './styles'

export default function WelcomeMessage() {
  return (
    <WelcomeContainer>
      <MainText>
        <span>Looking</span>
        <span>for</span>
        <span>a</span>
        <span>web</span>
        <span>developer?</span>
      </MainText>
      <SecondaryText>
        <span>I'm</span>
        <span>Fabio</span>
        <span>Oliveira,</span>
        <span style={{color: 'orange'}}>Frontend</span>
        <span>and</span>
        <span style={{color: 'orange'}}>Backend</span>
        <span>developer</span>
      </SecondaryText>
    </WelcomeContainer>
  )
}