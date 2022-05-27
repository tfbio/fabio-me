import Link from 'next/link'
import styles from './Nav.module.scss'

export default function NavItem({title, href}) {
  return (
    <div className={styles.item}>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </div>
  )
}