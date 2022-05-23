import styled from 'styled-components'

export const NavContainer = styled.div`
  float: right;
  margin-top: 0.4rem;
`

export const NavItems = styled.div`
  justify-content: center;
  margin-right: 2rem;
  border-bottom: orange solid 1.2px;
  transition: 0.3s ease-out;

  min-width: 5.2rem;
  width: 6.8vw;
  @media (max-width: 768px) {
    width: 5.2rem;
  }

  a {
    font-size: 1.6vw;
    @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  }

  :hover {
    opacity: 0.6;
  }
`