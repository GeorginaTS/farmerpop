
import Nav from 'react-bootstrap/Nav'
import Logo from "../assets/img/logo.png"
import  styles from '../styles/components/Header.module.css'
export const Header = () => {
  return (
    <Nav defaultActiveKey='/home' as='ul' className={styles.headerContainer}>
      <div>
        <Nav.Item as='li'>
          <Nav.Link href='/home'>
           <img src={Logo} alt="" className={styles.logo}/>
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  )
}
