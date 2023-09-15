
import { Container } from "react-bootstrap"
import  styles from '../styles/pages/ProfilePAge.module.css'
import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export const ProfilePage = () => {
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
    <h1>Benvingut {user.name}</h1>
      
    </Container>
    </>
  )
}
