
import { Container, Row } from "react-bootstrap"
import  styles from '../styles/pages/UserPage.module.css'
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const UserPage = () => {
  const { id } = useParams() 
  const [user, setUser] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const config = {
          url:`http://localhost:3000/user/${id}`,
          method:'GET'
        }
        console.log(id)
        const response = await axios(config)
      
        setUser(response.data)
        setLoading(false)

      } catch (error) {
        setError('Failed to connect to server :(')
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (loading) {
    // Display loading state
    return <div className='error-messages'>Loading...</div>
  }
  if (error) {
    // Display error message
    return <div className='error-messages'>Something went wrong: {error}</div>
  }
  return (
    <>
    <Container className={styles.container}>
      <Row><h1>Pagina de l'usuari {user.name}</h1></Row>
    
    <p><b>Aqui podràs veure:</b></p>  
      <ul className={styles.ul}>
        <li className={styles.li}>la seva localització</li>
        <li className={styles.li}>els seus productes</li>
        <li className={styles.li}>contactar</li>
        <li className={styles.li}>valorar</li>
        <li className={styles.li}>afegir favorits</li>
      </ul>
    
    </Container>
    </>
  )
}
