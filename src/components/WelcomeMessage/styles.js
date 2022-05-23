import styled from 'styled-components'

export const WelcomeContainer = styled.div`
  flex-direction: column;
  align-items: flex-end;
  margin-top: -6rem;
  margin-right: 4%;
`

export const MainText = styled.div`
  span {
    font-size: 3.2rem;
    margin-left: 0.6rem;
    margin-bottom: 0.4rem;
    font-weight: bold;
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

  button {
    width: min-content;
    font-size: 1rem;
  }
`