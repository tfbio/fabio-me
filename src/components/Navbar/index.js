import NavItem from './NavItem'
import styles from './Nav.module.scss'

export default function Navigation() {
  return (
    <div className={styles.container}>
      <NavItem title="Projects" href="#" />
      <NavItem title="About" href="#" />
      <NavItem title="Contact" href="#" />
    </div>
  )
}