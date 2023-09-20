import styles from '../styles/components/ProductCard.module.css'

import { Card } from 'react-bootstrap'
import {UserSticker} from '../components/UserSticker'

export interface ProductCardProps {
    title: string,
    price:number,
    user_id: number,
}

export const ProductCard = ({ title, price, user_id }: ProductCardProps)=> {
  return (
    <Card className={styles.card}>      
      <h4>{title}</h4>
      <h5>{price}€</h5>
      <UserSticker user={user_id} />
    </ Card>
  )
}
