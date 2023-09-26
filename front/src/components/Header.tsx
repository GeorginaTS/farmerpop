
import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.png"
import  styles from '../styles/components/Header.module.css'
import style from '../App.module.css'
import { MyLocation } from "./MyLocation"

export const Header = () => {
  return (
    <section id='header'>
    <nav>
      <div className="logoContainer">
        <Link to='/home'>
          <img src={Logo} alt="" className={styles.logo}/>
        </Link>
      </div>
      <MyLocation />
      <div className="signBtns">      
        <Link to='/login'><button className={style.btn}>Entrar</button> </Link>
        <Link to='/register'><button className={style.btn}>Registra't</button></Link>
      </div>
    </nav>
    </section>
  )
}
