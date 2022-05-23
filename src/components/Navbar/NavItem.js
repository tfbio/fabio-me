import Link from 'next/link'
import { NavItems } from './styles'

export default function NavItem({title, href}) {
  return (
    <NavItems>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </NavItems>
  )
}