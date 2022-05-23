import styled from 'styled-components'

export const WelcomeSection = styled.section`
  position: relative;
  justify-content: right;
`
export const Scrolldown = styled.button`
  position: absolute;
  bottom: 4%;
  right: 40%;

  svg {
    color: #d9d9d9;
    height: 4rem;
    width: 12rem;
    opacity: 0.7;
    transition: all ease-out 0.3s;

    :hover{
      color: #FFFFFF;
      opacity: 1;
    }
  }
`

export const ProjectSection = styled.section`
  background: #d9d9d9;
  flex-direction: column;
  height: fit-content;
  margin-bottom: 4rem;


  h1 {
    text-align: center;
    color: #000000;
    font-size: 2.8rem;
    width: 90%;
    border-bottom: solid 5px orange;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

export const Projects = styled.div`
  width: 100vw;
  padding: 0 4%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
  grid-gap: 1.8rem;
`

export const AboutSection = styled.section`
  background: #ffffff;
  flex-direction: column;
  height: fit-content;

  h1 {
    text-align: center;
    color: #000000;
    font-size: 2.8rem;
    width: 90%;
    border-bottom: solid 5px orange;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

export const Footer = styled.div`
  background: #d9d9d9;
  border-top: 1px solid #000000;
  padding: 0.4rem 0;
`