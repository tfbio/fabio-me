import styled from 'styled-components'

export const WelcomeContainer = styled.div`
  flex-direction: column;
  align-items: flex-end;
  margin-top: -6rem;
  margin-right: 4%;

  @keyframes SlideInFromLeft {
    from { 
      right: 10%;
      opacity: 0%;
    }
    to {
      right: 0%;
      opacity: 100%;
    }
  }
  @keyframes SlideInFromRight {
    from { 
      left: 10%;
      opacity: 0%;
    }
    to {
      left: 0%;
      opacity: 100%;
    }
  }
`

export const MainText = styled.div`
  span {
    font-size: 3.2rem;
    margin-left: 0.6rem;
    margin-bottom: 0.4rem;
    font-weight: bold;

    opacity: 0%;
    position: relative;
    animation: SlideInFromLeft;
    animation-duration: 0.8s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;  
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }

  
`

export const SecondaryText = styled.div`
  margin-right: 1.8rem;
  span {
    font-size: 1.4rem;
    margin-left: 0.4rem;
    font-weight: bold;

    opacity: 0%;
    position: relative;
    animation: SlideInFromLeft;
    animation-duration: 0.8s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;  
    transition: all 0.3s;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0;
  }
`

export const LinksContainer = styled.div`
  margin-right: 1.2rem;
  margin-top: 1.2rem;
  flex-direction: column;
  align-items: flex-end;

  opacity: 0%;
  position: relative;
  animation: SlideInFromRight;
  animation-duration: 0.8s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;  
  transition: all 0.3s;

  @media (max-width: 768px) {
    margin-right: 0;
  }

  strong {
    margin-top: 0.5rem;
    margin-right: 0.4rem;
  }

  div {
    background: #fff;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;
    padding: 0;
    border: 0;
  }

  a {
    display: flex;
    flex-direction: row;
    margin-right: 1rem;
    margin-right: 0.45rem;
    margin-bottom: 0.45rem;
  }
 
`