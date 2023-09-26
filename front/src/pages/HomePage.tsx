import style from '../App.module.css'
import styles from '../styles/pages/HomePage.module.css'
import { SearchBar } from '../components/SearchBar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductCard } from '../components/ProductCard'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  const [products, setProducts] = useState<any[]>([])
  const [searchKeywords, setSearchKeywords] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const config = {
          url:`http://localhost:3000/product/`,
          method:'GET'
        }
        const response = await axios(config)
      
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching courses:', error)
        setError('Failed to connect to server :(')
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filteredProducts = searchKeywords
    ? products.filter((product) =>
      product.title?.toLowerCase().includes(searchKeywords.toLowerCase())
    )
    : products

  const handleSearch = (keywords: string) => {
    setSearchKeywords(keywords)
  }

  if (loading) {
    // Display loading state
    return <div className='error-messages'>Loading...</div>
  }
  if (error) {
    // Display error message
    return <div className='error-messages'>Something went wrong: {error}</div>
  }
  return (
    <section id='homepage' className={style.container}>
      <div className={style.content}>
      <h1>Anima't a menjar sa  <br />de la mà dels teus veïns.</h1>
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>  
    <div className={style.productGrid}>
        {filteredProducts.map((product, i) => (
          <div key={i} id={product.id} className={style.productDiv}>
            <Link to={`/product/${product.id}`}>
              <ProductCard
                title={product.title}
                price={product.price}
                user_id={product.user_id}
              /> 
            </Link>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
