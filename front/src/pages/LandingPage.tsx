import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.png"

export const LandingPage = () => {
  return (
    <>
    <h1>Benvingut a </h1>
    <img src={Logo} alt="" />
      <Link to='/home'> Entrar</Link>
    </>
  )
}
