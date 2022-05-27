import styles from './Project.module.scss'

export default function TechCard({title}) {
  return (
    <div className={styles.item}>
      <p>{title}</p>
    </div>
  )
}