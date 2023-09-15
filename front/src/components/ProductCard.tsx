import styles from '../styles/components/ProductCard.module.css'

import { Card } from 'react-bootstrap'

export interface ProductCardProps {
    title: string,
    price:number,
}

export const ProductCard = ({ title, price }: ProductCardProps)=> {
  return (
    <Card className={styles.card}>      
      <h4>{title}</h4>
      <h5>{price}€</h5>
    </ Card>
  )
}
