import styles from '../App.css'
import { Twitter, Facebook, Instagram } from 'react-bootstrap-icons'

export const Footer = () => {
  return (
    <section className={styles.footerSection}>  
      <div className={styles.bottomFooter}>
        <div className={styles.socialFooter}>
          <a href='#'><Twitter className={styles.socialIcon} /></a>
          <a href='#'><Instagram className={styles.socialIcon} /></a>
          <a href='#'><Facebook className={styles.socialIcon} /></a>
        </div>
        <div className={styles.copyrightFooter}>
          FarmerPOP, Inc. © 2023
        </div>
      </div>
    </section>
  )
}
