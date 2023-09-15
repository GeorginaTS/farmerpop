import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {ProductCard} from '../components/ProductCard'

import  styles from '../styles/pages/HomePage.module.css'

import axios from 'axios'

export const HomePage = () => {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetch('http://localhost:3000/product',
        // {
        //   mode: 'no-cors',
        // },)
        // if (!response.ok) {
        //   throw new Error('Failed to fetch data')
        // }
        // const data = await response.json()
        // setProducts(data.data)
        const config = {
          url:'http://localhost:3000/product',
          method:'GET',
          // mode:'no-cors',
          // withCredentials: true,
          // credentials: 'same-origin',
          // headers: {
          //   'Access-Control-Allow-Origin': '*',
          //   'origin':'x-requested-with',
          //   'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
          //   'Content-Type': 'application/json',
          // }
        }
        const response = await axios(config)
      
        setProducts(response.data)
        setLoading(false)

      } catch (error) {
        //console.error('Error fetching products:', error)
        setError('Failed to connect to server :('+error)
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
    <section className={styles.container}>
      <h1>HomePage</h1>
          <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
        {products.map((product, i) => (
          <div key={i}>
            <Link to={`/course/${product._id}`}>
              <ProductCard
                title={product.title}
                price={product.price}
              />
            </Link>
          </div>
        ))}
      </div>
    
    
    </section>
  )
}
