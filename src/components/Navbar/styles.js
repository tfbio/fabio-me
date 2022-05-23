import styled from 'styled-components'

export const NavContainer = styled.div`
  float: right;
  margin-top: 0.4rem;
`

export const NavItems = styled.div`
  justify-content: center;
  width: 5.2rem;

  margin-right: 2rem;
  border-bottom: orange solid 1.2px;
  transition: 0.3s ease-out;

  a {
    font-size: 1.2rem;
  }

  :hover {
    opacity: 0.6;
  }
`