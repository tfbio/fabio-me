import { TechItem } from './styles'

export default function TechCard({title}) {
  return (
    <TechItem>
      <p>{title}</p>
    </TechItem>
  )
}