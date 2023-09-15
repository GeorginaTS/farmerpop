import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {ProductCard} from '../components/ProductCard'

import styles from '../styles/pages/HomePage.module.css'

export const HomePage = () => {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const config = {
          url:'http://localhost:3000/product',
          method:'GET',
        }
        const response = await axios(config)
      
        setProducts(response.data)
        setLoading(false)

      } catch (error) {
        setError('Failed to Fetch:(')
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
    return <div className='error-messages'> {error}</div>
  }

  return (
    <Container className={styles.container}><br></br>
      <h2>Troba productes frescos al teu coltant, aqui una llista dels més pròxims</h2>
      <div className={styles.list}>
        {products.map((product, i) => (
          <div key={i} >
            <Link to={`/product/${product.id}`}>
              <ProductCard
                title={product.title}
                price={product.price}
              />
            </Link>
          </div>
        ))}
      </div>
    
    
    </Container>
  )
}
