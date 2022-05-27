import Image from 'next/image'
import TechCard from './TechCard'
import Tag from './Tag'
import placholder from '../../assets/sample-image.jpg'
import styles from './Project.module.scss'

export default function ProjectCard({ image, title, description, techs, icon }) {
  return (
    <div className={styles.container}>
      <div className={styles.projectImage}>
        <Image
          src={placholder}        
        />
        <strong>Project</strong>
        <div className={styles.tagList}>
          {icon && <Tag icon={icon}/>}
          <Tag icon="github"/>
        </div>
      </div>
      <p className={styles.description}>this is a neat description of this project my man</p>
      <div className={styles.techContainer}>
        <TechCard title="Next.js"/>
        <TechCard title="Next.js 1"/>
        <TechCard title="Next.js 2"/>
        <TechCard title="Next.js 3"/>
        <TechCard title="Next.js 4"/>
      </div>
    </div>
  )
}