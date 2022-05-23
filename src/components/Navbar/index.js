import NavItem from './NavItem'
import { NavContainer } from './styles'

export default function Navigation() {
  return (
    <NavContainer>
      <NavItem title="Projects" href="#" />
      <NavItem title="About" href="#" />
      <NavItem title="Contact" href="#" />
    </NavContainer>
  )
}