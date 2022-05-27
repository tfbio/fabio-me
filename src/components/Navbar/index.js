import NavItem from './NavItem'
import styles from './Nav.module.scss'

export default function Navigation() {
  return (
    <div className={styles.container}>
      <NavItem title="Projects" href="#projects" />
      <NavItem title="About" href="#about" />
      <NavItem title="Contact" href="#contact" />
    </div>
  )
}