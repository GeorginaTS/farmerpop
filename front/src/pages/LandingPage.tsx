import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.png"
import  style from '../App.module.css'
import  styles from '../styles/pages/LandingPage.module.css'

export const LandingPage = () => {
  return (
    <>
    <section className={style.container}>
      <div className={style.content}>
        <img src="../src/assets/img/veg_ani.gif" className={styles.img} />
      <Link to='/home'> <h1>Gaudeix  i menja sa</h1></Link>
      <img src={Logo} alt="" />
      </div>
    </section>
    </>
  )
}
