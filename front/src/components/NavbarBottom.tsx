import Nav from 'react-bootstrap/Nav'
import { HouseDoorFill, PersonCircle, PlusCircleFill, Search } from 'react-bootstrap-icons'
import  styles from '../styles/components/NavbarBottom.module.css'

export const NavbarBottom = () => {
  return (
    <div className={styles.navBottomContainer}>
      <Nav defaultActiveKey='/home' as='ul' className={styles.navContainer}>
        <Nav.Item as='li'>
          <Nav.Link href='/home'>
            <HouseDoorFill className={styles.icon}  />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as='li'>
          <Nav.Link href='/search'>
            <Search className={styles.icon} />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as='li'>
          <Nav.Link href='/addproduct'>
            <PlusCircleFill className={styles.icon} />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as='li'>
          <Nav.Link href='/profile'>
            <PersonCircle className={styles.icon} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
