import { Container, Row } from 'react-bootstrap'

import styles from '../styles/pages/SearchPage.module.css'
import { SearchBar } from '../components/SearchBar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductCard } from '../components/ProductCard'
import { Link } from 'react-router-dom'

export const SearchPage = () => {
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
    <Container className={styles.container}>
    <Row>
      <SearchBar onSearch={handleSearch} />
    </Row>
      
    <Row>
        {filteredProducts.map((product, i) => (
          <div key={i}>
            <Link to={`/product/${product.id}`}>
              <ProductCard
                title={product.title}
                price={product.price}
              />
            </Link>
          </div>
        ))}
      </Row>
    </Container>
  )
}
