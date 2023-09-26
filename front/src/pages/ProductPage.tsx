import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import style from '../App.module.css'
import styles from '../styles/pages/ProductPage.module.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { UserCard } from '../components/UserCard'

export const ProductPage = () => {
  const { id } = useParams()
  const [product, setProducts] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const config = {
          url:`http://localhost:3000/product/${id}`,
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
    fetchProduct()
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
    <section id='product' className={style.container}>
      <div className={style.content}>
      {/* <img src='https://source.unsplash.com/random/100×100?fruit' className={styles.img}/> */}
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Preu: {product.price}€</p>
        <br />
          <UserCard user={product.user_id} />
      </div>
    </section>
  )
}
