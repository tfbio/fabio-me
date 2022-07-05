import Image from 'next/image'
import TechCard from './TechCard'
import Tag from './Tag'
import styles from './Project.module.scss'

export default function ProjectCard({ image, title, description, techs, github, live }) {
  return (
    <div className={styles.container}>
      <div className={styles.projectImage}>
        <Image
          src={image} 
          width={800}
          height={360}
        />
        <strong>{title}</strong>
        <div className={styles.tagList}>
          {live !== '' && <Tag icon='live' link={live}/>}
          <Tag icon="github"link={github}/>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.techContainer}>
        {techs.map(tech => (
          <TechCard key={tech} title={tech}/>
        ))}
      </div>
    </div>
  )
}

