import styles from '../styles/components/ProductCard.module..css'

import { Card } from 'react-bootstrap'

export interface ProductCardProps {
    title: string,
    price:number,
}

export const ProductCard = ({ title, price }: ProductCardProps)=> {
  return (
    <Card className={styles.card}>      
      <h4 className='fw-bold'>{title}</h4>
      <p className='fw-semibold'>{price}€</p>
    </ Card>
  )
}
