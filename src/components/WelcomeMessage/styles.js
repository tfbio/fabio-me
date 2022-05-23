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