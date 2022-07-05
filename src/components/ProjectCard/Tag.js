import styles from './Project.module.scss'
import {FaEye, FaEyeSlash, FaGithub} from 'react-icons/fa'

export default function Tag({ link, icon }) {
  return (
    <div className={styles.tag}>
      <a href={link} style={{background: '#000'}}>
        {icon === 'github'? <FaGithub/> : icon === 'live' ? <FaEye/> : <FaEyeSlash/>}
      </a>
      <div style={{borderColor: 'transparent transparent transparent #000'}}></div>
    </div>
  )
}