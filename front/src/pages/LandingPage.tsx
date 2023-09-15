import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.png"
import { Container } from "react-bootstrap"
import  styles from '../styles/pages/LandingPage.module.css'

export const LandingPage = () => {
  return (
    <>
    <Container className={styles.container}>
    <h1>Benvingut a </h1>
      <Link to='/'> <img src={Logo} alt="" /></Link>
    </Container>
    </>
  )
}
