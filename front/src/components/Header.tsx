
import Nav from 'react-bootstrap/Nav'

export const Header = () => {
  return (
    <Nav defaultActiveKey='/home' as='ul' >
      <div>
        <Nav.Item as='li'>
          <Nav.Link href='/home'>
            Home
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  )
}
