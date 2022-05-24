import styled from 'styled-components'

export const ProjectContainer = styled.div`
  background: #ffffff;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border-radius: 12px;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.62);
  transition: all ease-out 0.3s;

  &:hover {
    transform: translate(2px, -2px);
  }
`

export const Description = styled.p`
    margin: 0.8rem 0 0 1rem;
    color: #000000;
`

export const ProjectImage = styled.div`
  position: relative;
  width: 100%;  
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  strong {
    position: absolute;
    top: 0;
    padding: 0.6rem 2rem; 
    background-color: rgba(0,0,0,.7);
    width: 100%;
  }
`

export const TechContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-row-gap: 0.6rem;
  grid-column-gap: 0.4rem;
  padding: 0.8rem 0.6rem;
`
export const TechItem = styled.div`
  background: #e65c00;
  white-space: nowrap;
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  box-shadow: 0px 10px 13px -7px #000000;
  transition: all ease-out 0.3s;

  :hover {
    background: #cc5200;
  }

  p {
    color: #000000;
  }
`