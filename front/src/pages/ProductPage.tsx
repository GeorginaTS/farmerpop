import axios from 'axios'
import { Container } from 'react-bootstrap'
import styles from '../styles/pages/ProductPage.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const ProductPage = () => {
  const { id } = useParams() 
  const [products, setProducts] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const config = {
          url:`http://localhost:3000/product`,
          method:'GET'
        }
        console.log(id)
        const response = await axios(config)
      
        setProducts(response.data)
        setLoading(false)

      } catch (error) {
        setError('Failed to connect to server :(')
        setLoading(false)
      }
    }
    fetchProducts()
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
    <Container className={styles.container}>
    <h1>ProductPage { id }</h1>
    <p></p>
    </Container>
  )
}
