import Image from 'next/image'
import { ProjectContainer, ProjectImage, TechContainer, Description } from './styles'
import TechCard from './TechCard'
import placholder from '../../assets/sample-image.jpg'

export default function ProjectCard({ image, title, description, techs }) {
  return (
    <ProjectContainer>
      <ProjectImage>
        <Image
          src={placholder}        
        />
        <strong>Project</strong>
      </ProjectImage>
      <Description>this is a neat description of this project my man</Description>
      <TechContainer>
        <TechCard title="Next.js"/>
        <TechCard title="Next.js 1"/>
        <TechCard title="Next.js 2"/>
        <TechCard title="Next.js 3"/>
        <TechCard title="Next.js 1"/>
        <TechCard title="Next.js 2"/>
        <TechCard title="Next.js 3"/>
      </TechContainer>
    </ProjectContainer>
  )
}